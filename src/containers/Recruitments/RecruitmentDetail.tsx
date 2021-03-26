import React, {useContext} from "react";
import { useParams, Link } from "react-router-dom"
import DateService from "../../services/utils/DateService";
import useRecruitment from "../../hooks/use-recruitment";
import RecruitmentService from "../../services/api/RecruitmentService";
import {UserContext} from "../../providers/AuthProvider";


const RecruitmentContent: React.VFC = () => {
    const {id} = useParams<{id: string}>()
    const { userInfo } = useContext(UserContext)
    const data = JSON.parse(userInfo) as {id: number, token: string}

    const { recruitment } = useRecruitment(Number(id))
    const findPurpose = (val: number | undefined) => {
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
        recruitment ?
        <>
            <div className="bg-custom-gray-100">
                <div className="container px-6 py-14 box-border mx-auto">
                    <section className="flex flex-col items-center pt-12">
                        <img className="rounded-full inline-block w-24 mb-6" src={recruitment?.owner_icon} alt="" />
                        <h2 className="font-bold text-lg mb-4">{recruitment.title}</h2>
                        <div className="mb-4">
                            <span className="font-bold text-custom-gray-base">
                                {DateService.formatTimestamp(new Date(recruitment.start_date))} ~ {DateService.formatTimestamp(new Date(recruitment.end_date))}
                            </span>
                        </div>
                        <div>
                            <img className="inline-block w-5" src="/images/icons/commons/ion_people_color.svg" alt="" />
                            <span className="pl-4 text-sm font-bold text-custom-gray-base">{recruitment.users.length}/{recruitment.num_of_users}</span>
                        </div>
                    </section>
                </div>
            </div>
            <div className="bg-custom-blue-100">
                <div className="container px-6 py-14 box-border mx-auto">
                    <div className="">
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">イベント名</h3>
                            <p className="overflow-x-scroll whitespace-nowrap  bg-white text-custom-black-100 font-bold rounded-lg px-4 py-2">{recruitment.event_name}</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">イベントURL</h3>
                            <p className="overflow-x-scroll whitespace-nowrap bg-white text-custom-blue-base font-bold rounded-lg px-4 py-2">
                                <a href={recruitment?.event_url} target="_blank" rel="noreferrer">{recruitment.event_url}</a>
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">参加目的</h3>
                            <p className="bg-white text-custom-black-100 font-bold rounded-lg px-4 py-2">{findPurpose(recruitment.purpose)?.label}</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">メンバー</h3>
                            <div>
                                {recruitment.users.map(user => (
                                    <Link to={`/${user.id}`} className="inline-block" key={user.id}>
                                        <img className="w-16 inline-block rounded-full" src={user.icon} alt="" />
                                        <p className="text-center">{user.name}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button onClick={() => requestApprovalRecruitment(data.id, Number(id))} type="button" className="w-64 bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-2 px-8">
                            参加を希望する
                        </button>
                    </div>
                </div>
            </div>
        </>
            : <div />
    )};

export default RecruitmentContent;
