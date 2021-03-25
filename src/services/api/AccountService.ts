import axios from "axios";
import ApiService from "./ApiService";
import {InitUser, Login} from "../models/user";

class AccountService extends ApiService{
    async createUserAccount(form: InitUser): Promise<{id: number, token: string}> {
        const res = await axios.post(`${this.url}/user/add`, form)
        const data = res.data as {id: number, token: string}
        return data
    }

    async loginUser(form: Login): Promise<{id: number, token: string}> {
        const res = await axios.post(`/login`, form)
        const data = res.data as {id: number, token: string}
        return data
    }
}

export default AccountService
