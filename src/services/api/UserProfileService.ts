import axios from "axios";
import ApiService from "./ApiService";
import {User} from "../models/user";

class UserProfileService extends ApiService{
    async getUserProfile(useId: number): Promise<User> {
        const res = await axios.get(`${this.url}/user/${useId}`)
        const data = res.data as User
        return data
    }
}

export default UserProfileService;
