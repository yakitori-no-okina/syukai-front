import React from "react";
import { Link } from "react-router-dom"
import { Recruitment, blankRecruitment } from "../../services/models/recruitment";
import DateService from "../../services/utils/DateService";

const RecruitmentList: React.VFC = () => {
    const items: Recruitment[] = blankRecruitment
    return (
        <div className="container px-6 py-14 box-border mx-auto h-screen">
            <div className="flex justify-center">
                <div className="w-96 mx-auto text-right mt-10">
                    <Link to="/recruitment/create" className="inline-flex items-center bg-custom-blue-base text-white font-bold rounded-3xl py-2 px-10">
                        <img className="w-5 inline-block mr-1" src="/images/icons/commons/ion_add_white.svg" alt="" />
                        <span>募集する</span>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center py-8">
                {items.map(item => (
                    <Link
                        className="w-96 bg-white px-8 py-2 mb-6 shadow rounded-xl"
                        to={`/recruitment/${item.id}`} key={item.id}
                    >
                        <div className="">
                            <div className="text-left">
                            <span className="text-sm font-bold text-custom-gray-base">
                                {DateService.formatTimestamp(new Date(item.startDate))} ~ {DateService.formatTimestamp(new Date(item.endDate))}
                            </span>
                            </div>
                            <p className="font-bold text-lg mb-4">{item.message}</p>
                            <div className="flex">
                                <div className="w-16 inline-block">
                                    <img className="rounded-full" src={item.ownerIcon} alt="aaa"/>
                                </div>
                                <div className="pl-6">
                                    <div className="mb-2">
                                        <p className="text-sm text-custom-black-100">aaaaaaaaa</p>
                                        <p className="text-sm text-custom-black-100">aaaaaaaaa</p>
                                        <p className="text-sm text-custom-black-100">aaaaaaaaa</p>
                                    </div>
                                    <div>
                                        <img className="inline-block w-5" src="/images/icons/commons/ion_people_color.svg" alt="" />
                                        <span className="pl-4 text-sm font-bold text-custom-gray-base">4/5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default RecruitmentList;
