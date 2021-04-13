import React, {useContext, useState} from "react";
import { useLocation, useHistory } from "react-router-dom";
import AccountCreate from "./AccountCreate";
import AccountSettingProfile from "./AccountSettingProfile";
import AccountSettingDone from "./AccountSettingDone";
import {UserContext} from "../../../providers/AuthProvider";
import ImageConvert from "../../../services/utils/ImageConvert";


type Account = {
    mail: string | undefined,
    password: string | undefined
}

const blackAccount = {
    mail: undefined,
    password: undefined
}

type Form = {
    name: string | undefined,
    icon: string | undefined,
    github: string | undefined,
    twitter: string | undefined,
    links: string[] | [],
    about: string | undefined
}

const blackForm = {
    name: undefined,
    icon: "https://placehold.jp/150x150.png",
    github: undefined,
    twitter: undefined,
    links: [],
    about: undefined
}



const Signup: React.VFC = () => {
    const history = useHistory()
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const step = Number(query.get("step"))

    const [account, setAccount] = useState<Account>(blackAccount);
    const handleAccount = (e: React.ChangeEvent<HTMLInputElement>, val: string): void => setAccount({
        ...account,
        [val]: e.target.value
    })

    const [form, setForm] = useState<Form>(blackForm)
    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string): void => {
        if (val === "links") {

            setForm({
                ...form,
                [val]: [e.target.value]
            })
        } else {
            setForm({
                ...form,
                [val]: e.target.value
            })
        }
    }

    /* eslint-disable */
    const handleImage = async (i: any): Promise<void> => {
        const image = await ImageConvert(i)
        setForm({
            ...form,
            icon: image
        })
    };
    /* eslint-disable */

    const { signUp } = useContext(UserContext)
    const createUserAccount = async () => {
        if(!form || !account) return
        const inputForm = {
            ...form,
            ...account
        }
        signUp(inputForm)
        await new Promise(() => setTimeout(() => {
            history.push("/recruitment")
            history.go(0)
        }, 2000))

    }

    return (
        <>
            {step === 1 && (
                <AccountCreate account={account} handleAccount={handleAccount} />
            )}
            {step === 2 && (
                <AccountSettingProfile form={form} handleForm={handleForm} handleImage={handleImage} />
            )}
            {step === 3 && (
                <AccountSettingDone createUserAccount={createUserAccount}  />
            )}
        </>
    )
}

export default Signup;
