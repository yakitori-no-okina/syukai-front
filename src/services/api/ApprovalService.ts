import axios from "axios";
import ApiService from "./ApiService";

class ApprovalService extends ApiService {
    // TODO shoudApproval?
    async deleteApproval(approvalWaitId: number, shouldApproval: boolean) {
        await axios.delete(`/approval/${approvalWaitId}/${shouldApproval}`)
    }
}

export default ApprovalService;
