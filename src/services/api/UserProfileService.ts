import axios from "axios";
import ApiService from "./ApiService";
import {User} from "../models/user";

class UserProfileService extends ApiService{
    async getUserProfile(useId: number): Promise<User> {
        const res = await axios.get(`${this.url}/user/${useId}`)
        const data = res.data as User
        return data
    }

    async editUserProfile(userId: number, form: User): Promise<void> {
        await axios.put(`${this.url}/user/${userId}`, form)
    }
}

export default UserProfileService;
