import React from "react";
import { Link } from "react-router-dom"
import { Recruitment, blankRecruitment } from "../../services/models/recruitment";

const RecruitmentList: React.VFC = () => {
    const items: Recruitment[] = blankRecruitment
    return (
        <div className="flex justify-center">
            {items.map(item => (
                <Link
                    className="w-9/12 bg-white px-8 py-2 mb-6 shadow rounded-xl"
                    to={`/recruitment/${item.id}`} key={item.id}
                >
                    <div className="">
                        <div className="text-left">
                            <span className="text-sm">{item.startDate} ~ {item.endDate}</span>
                        </div>
                        <p className="font-bold text-lg mb-4">{item.message}</p>
                        <div className="flex">
                            <div className="w-16 inline-block">
                                <img className="rounded-full" src={item.ownerIcon} alt="aaa"/>
                            </div>
                            <div className="pl-6">
                                <div className="mb-2">
                                    <p className="text-sm">aaaaaaaaa</p>
                                    <p className="text-sm">aaaaaaaaa</p>
                                    <p className="text-sm">aaaaaaaaa</p>
                                </div>
                                <div className="text-sm">
                                    <span>😆</span><span className="pl-4">4/5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default RecruitmentList;
