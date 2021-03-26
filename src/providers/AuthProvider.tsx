import React, {createContext, useContext} from "react";
import {Login, InitUser} from "../services/models/user";
import AccountService from "../services/api/AccountService";


const USER_KEY = "userInfo"
export type User = {
    id: number | null,
    token: string | null,
}

type userContextValue = {
    userInfo: string,
    signUp: (form: InitUser) => void
    login: (form: Login) => void,
    logout: () => void
}

export const UserContext = createContext<userContextValue>({
    userInfo: localStorage.getItem(USER_KEY)?? "",
    signUp:  () =>  undefined,
    login:  () => undefined,
    logout:  () => undefined
})



const AuthProvider: React.FC = ({children}) => {
    const {userInfo} = useContext(UserContext)

    const login = async (form: Login): Promise<void> => {
        const res = await (new AccountService()).loginUser(form)
        localStorage.setItem(USER_KEY, JSON.stringify(res))
    }

    const logout =  () => {
        localStorage.clear()
    }

    const signUp = async (form: InitUser) => {
        const res = await (new AccountService()).createUserAccount(form)
        localStorage.setItem(USER_KEY, JSON.stringify(res))
    }

    return (
        <UserContext.Provider value={{userInfo, login, logout, signUp}}>
            {children}
        </UserContext.Provider>
    )
}
export default AuthProvider;
