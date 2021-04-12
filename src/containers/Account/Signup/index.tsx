import React, {useContext, useState} from "react";
import { useLocation, useHistory } from "react-router-dom";
import AccountCreate from "./AccountCreate";
import AccountSettingProfile from "./AccountSettingProfile";
import AccountSettingDone from "./AccountSettingDone";
import {UserContext} from "../../../providers/AuthProvider";


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
    const handleImage = (i: any): void => {
        const file = i.target.files[0]
        if (!file) {
            alert("ファイルを選択して")
            return
        }
        if (file.size > 10000000) {
            alert("ファイルサイズがでかすぎ")
            return
        }
        if (file.type !== "image/jpeg" && file.type !== "image/png") {
            alert("jpegかpngで")
            return
        }

        const reader: any = new FileReader()
        reader.onerror = () => alert("画像の読み取りに失敗しました")
        reader.readAsDataURL(file)
        reader.onload = () => {
            const base64 = reader.result as string
            setForm({
                ...form,
                icon: base64
            })
        }
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
