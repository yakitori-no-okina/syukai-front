import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom"
import { Login } from "../../../services/models/user";
import {UserContext} from "../../../providers/AuthProvider";
import AccountLoginComponent from "../../../components/Account/AccountLogin";


const blackAccount = {
    mail: undefined,
    password: undefined
}

const UserLogin: React.VFC = () => {
    const history = useHistory()
    const usercontext = useContext(UserContext)
    const [account, setAccount] = useState<Login>(blackAccount);
    const handleAccount = (e: React.ChangeEvent<HTMLInputElement>, val: string): void => setAccount({
        ...account,
        [val]: e.target.value
    })

    const LinkTo = async () => {
        if(!account) return
        usercontext.login(account)
        await new Promise(() => setTimeout(() => {
            history.push("/recruitment")
            history.go(0)
        }, 2000))
    }

    return (<AccountLoginComponent account={account} handleAccount={handleAccount} LinkTo={LinkTo} />);
}

export default UserLogin;
