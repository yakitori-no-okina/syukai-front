import axios from "axios";
import ApiService from "./ApiService";
import {Recruitment, RecruitmentDetail} from "../models/recruitment";

class RecruitmentService extends ApiService{
    async getRecruitmentList(): Promise<Recruitment[]> {
        const res = await axios.get(`${this.url}/recruitment`)
        const data = res.data as Recruitment[]
        return data
    }

    async getRecruitmentDetail(recruitmentId: number): Promise<Recruitment> {
        const res = await axios.get(`${this.url}/recruitment/${recruitmentId}`)
        const data = res.data as Recruitment
        return data
    }

    async addRecruitment(form: RecruitmentDetail): Promise<void> {
        await axios.post(`${this.url}/recruitment/add`, form)
    }

    async requestRecruitment(userId: number, approvalId: number): Promise<void> {
        await axios.post(`${this.url}/recruitment/request/${approvalId}`, userId)
    }
}

export default RecruitmentService;
