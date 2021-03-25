import { createContext } from "react";
import {Login, InitUser} from "./services/models/user";


export type User = {
    id: number | null,
    token: string | null,
}

type userContextValue = {
    user: User,
    signUp: (form: InitUser) => void
    login: (form: Login) => void,
    logout: () => void
}

export const UserContext = createContext<userContextValue>({
    user: {
        id: null,
        token: null
    },
    signUp:  () =>  undefined,
    login:  () => undefined,
    logout:  () => undefined
})
