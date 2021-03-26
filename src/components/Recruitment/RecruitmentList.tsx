import React from "react";
import { Link } from "react-router-dom"
import { Recruitment, blankRecruitment } from "../../services/models/recruitment";
import DateService from "../../services/utils/DateService";

const RecruitmentListComponent: React.VFC<{ RecruitmentList: Recruitment[] }> = ({RecruitmentList = blankRecruitment}) =>
     (
        <>
            {RecruitmentList.map(item => (
                <Link
                    className="w-96 bg-white px-8 py-2 mb-6 shadow rounded-xl"
                    to={`/recruitment/${item.id}`} key={item.id}
                >
                    <div className="">
                        <div className="text-left">
                            <span className="text-sm font-bold text-custom-gray-base">
                                {DateService.formatTimestamp(new Date(item.start_date))} ~ {DateService.formatTimestamp(new Date(item.end_date))}
                            </span>
                        </div>
                        <p className="font-bold text-lg mb-4">{item.title}</p>
                        <div className="flex">
                            <div className="w-16 inline-block">
                                <img className="rounded-full" src={item.icon} alt="aaa"/>
                            </div>
                            <div className="pl-6">
                                <div className="mb-2">
                                    {item.users.map(user => (
                                        <p className="text-sm text-custom-black-100">{user.name}</p>
                                    ))}
                                </div>
                                <div>
                                    <img className="inline-block w-5" src="/images/icons/commons/ion_people_color.svg" alt="" />
                                    <span className="pl-4 text-sm font-bold text-custom-gray-base">{item.users.length}/{item.num_of_users}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )

export default RecruitmentListComponent;
