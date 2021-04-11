import React, {useContext} from "react";
import { useParams } from "react-router-dom"
import useRecruitment from "../../hooks/use-recruitment";
import RecruitmentService from "../../services/api/RecruitmentService";
import RecruitmentDetailComponent from "../../components/Recruitment/RecruitmentDetail";
import {UserContext} from "../../providers/AuthProvider";


const RecruitmentContent: React.VFC = () => {
    const {id} = useParams<{id: string}>()
    const { userInfo } = useContext(UserContext)
    const data = JSON.parse(userInfo) as {id: number, token: string}

    const { recruitment } = useRecruitment(Number(id))
    const findPurpose = (val: number | undefined): { label: string, val: number } | undefined => {
        const purposeList = [
            {label: "賞を受賞したい", val: 0},
            {label: "新しい技術を触りたい", val: 1},
        ]

        return purposeList.find(v => v.val === val)
    }

    const requestApprovalRecruitment = async (useId: number, recruitmentId: number) => {
        await (new RecruitmentService()).requestRecruitment(useId, recruitmentId)
    }

    return (
        recruitment ? <RecruitmentDetailComponent
            id={id} data={data}
            findPurpose={findPurpose}
            recruitment={recruitment}
            requestApprovalRecruitment={requestApprovalRecruitment}
        />  : <div />
    )};

export default RecruitmentContent;
