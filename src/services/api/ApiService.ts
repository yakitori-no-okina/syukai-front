import axios from "axios";
import { Notify } from "../models/notify";
import { Recruitment } from "../models/recruitment";


class ApiService {
   url: string
   constructor() {
       this.url = process.env.REACT_APP_API_URL!
   }

   async getNotification(id: number): Promise<Notify[]> {
       const res = await axios.get(`${this.url}/notification/${id}`)
       const data = res.data as Notify[]
       return data
   }

   async getRecruitmentList(): Promise<Recruitment[]> {
       const res = await axios.get(`${this.url}/recruitment`)
       const data = res.data as Recruitment[]
       return data
   }

   async getRecruitmentDetail(id: number): Promise<Recruitment> {
       const res = await axios.get(`${this.url}/recruitment/${id}`)
       const data = res.data as Recruitment
       return data
   }
}

export default ApiService;
