import React, { useContext } from "react";
import { Link } from "react-router-dom"
import RecruitmentListComponent from "../../components/Recruitment/RecruitmentList";
import useRecruitments from "../../hooks/use-recruitments";
import {UserContext} from "../../providers/AuthProvider";

const RecruitmentList: React.VFC = () => {
    const { userInfo } = useContext(UserContext)
    const data = JSON.parse(userInfo) as { id: number, token: string };
    const { recruitments }= useRecruitments(data.id)

    return (
        <div className="container px-6 py-14 box-border mx-auto h-screen">
            <div className="flex justify-center flex-wrap">
                <div className="w-96 mx-auto text-center mt-10">
                    <Link to="/recruitment/create" className="inline-flex items-center bg-custom-blue-base text-white font-bold rounded-3xl py-2 px-10">
                        <img className="w-5 inline-block mr-1" src="/images/icons/commons/ion_add_white.svg" alt="" />
                        <span>募集する</span>
                    </Link>
                </div>
            </div>
            {recruitments && (
                <div className="flex justify-center py-8">
                    <RecruitmentListComponent RecruitmentList={recruitments}/>
                </div>

            )}
        </div>

    )
}

export default RecruitmentList;
