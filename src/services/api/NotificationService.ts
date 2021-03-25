import axios from "axios";
import ApiService from "./ApiService";
import {Notify} from "../models/notify";

class NotificationService extends ApiService {
    async getNotification(userId: number): Promise<Notify[]> {
        const res = await axios.get(`${this.url}/notification/${userId}`)
        const data = res.data as Notify[]
        return data
    }
}

export default NotificationService;
