import React, { useContext } from "react";
import RecruitmentListComponent from "../../components/Recruitment/RecruitmentList";
import useRecruitments from "../../hooks/use-recruitments";
import {UserContext} from "../../providers/AuthProvider";
import ButtonLinkPrimary from "../../components/commons/buttons/ButtonLinkPrimary";

const RecruitmentList: React.VFC = () => {
    const { userInfo } = useContext(UserContext)
    const data = JSON.parse(userInfo) as { id: number, token: string };
    const { recruitments }= useRecruitments(data.id)

    return (
        <div className="container px-6 py-14 box-border mx-auto">
            <div className="flex justify-center flex-wrap">
                <div className="w-96 mx-auto text-center mt-10">
                    <ButtonLinkPrimary LinkTo="/recruitment/create">
                        募集する
                    </ButtonLinkPrimary>
                </div>
            </div>
            {recruitments && (
                <div className="flex justify-center flex-wrap py-8">
                    <RecruitmentListComponent RecruitmentList={recruitments}/>
                </div>

            )}
        </div>

    )
}

export default RecruitmentList;
