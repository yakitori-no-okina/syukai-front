import axios from "axios";
import ApiService from "./ApiService";
import {Recruitment, RecruitmentDetail, createForm} from "../models/recruitment";

class RecruitmentService extends ApiService{
    async getRecruitmentList(): Promise<Recruitment[]> {
        const res = await axios.get(`${this.url}/recruitment`)
        const data = res.data as Recruitment[]
        return data
    }

    async getRecruitmentDetail(recruitmentId: number): Promise<RecruitmentDetail> {
        const res = await axios.get(`${this.url}/recruitment/${recruitmentId}`)
        const data = res.data as RecruitmentDetail
        return data
    }

    async addRecruitment(form: createForm): Promise<string> {
        await axios.post(`${this.url}/recruitment/add`, form)
        return "ok"
    }

    async requestRecruitment(userId: number, approvalId: number): Promise<void> {
        await axios.post(`${this.url}/recruitment/request/${approvalId}`, userId)
    }

    async deleteRecruitmentApproval(recruitmentId: number, userId: number) {
        await axios.delete(`${this.url}/cancel/${recruitmentId}/${userId}`)
    }
}

export default RecruitmentService;
