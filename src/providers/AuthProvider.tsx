import React, {useState} from "react";
import { UserContext, User } from "../contexts";
import {Login, InitUser} from "../services/models/user";
import AccountService from "../services/api/AccountService";

const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User>({
        id: null,
        token: null
    });

    const login = async (form: Login): Promise<void> => {
        const res = await (new AccountService()).loginUser(form)
        setUser(res)
    }

    const logout =  () => {
        setUser({
            id: null,
            token: null
        })
    }

    const signUp = async (form: InitUser) => {
        const res = await (new AccountService()).createUserAccount(form)
        setUser(res)
    }

    return (
        <UserContext.Provider value={{user, login, logout, signUp}}>
            {children}
        </UserContext.Provider>
    )
}
export default AuthProvider;
