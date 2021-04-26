import React from "react";
import { useHistory } from "react-router-dom";
import AccountCreateComponent from "../../../components/Account/Signup/AccountCreate";

const AccountCreate: React.VFC<{
    account: { mail: string | undefined, password: string | undefined },
    handleAccount: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string) => void
}> = ({ account, handleAccount }) => {
    const history = useHistory()

    const LinkToStep = () => {
        if(!account) return
        history.push("/signup?step=2")
    }

    return (<AccountCreateComponent account={account} handleAccount={handleAccount} LinkTo={LinkToStep}/>);
}


export default AccountCreate;
