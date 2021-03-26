import axios from "axios";
import ApiService from "./ApiService";

class ApprovalService extends ApiService {
    // TODO shoudApproval?
    async deleteApproval(approvalWaitId: number) {
        await axios.delete(`${this.url}/approval/${approvalWaitId}`)
    }
}

export default ApprovalService;
