import React from "react";
import {useHistory} from "react-router-dom";
import AccountSettingProfileComponent from "../../../components/Account/Signup/AccountSettingProfile";

type Profile = {
    name: string | undefined,
    icon: string | undefined,
    github: string | undefined,
    twitter: string | undefined,
    links: string[] | [],
    about: string | undefined
}


const AccountSettingProfile: React.VFC<{
    form: Profile,
    handleForm: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string) => void,
    handleImage: (i: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ form, handleForm, handleImage }) => {

    const history = useHistory()

    const LinkToStep = () => {
        if(!form) return
        history.push("/signup?step=3")
    }

    return (
        <AccountSettingProfileComponent
        form={form}
        handleForm={handleForm}
        handleImage={handleImage}
        LinkToStep={LinkToStep}
    />);
}

export default AccountSettingProfile;
