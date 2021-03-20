import React from "react";
import { RecruitmentDetail, blankRecruitmentDetail } from "../../services/models/recruitment";
import DateService from "../../services/utils/DateService";

const RecruitmentContent: React.VFC = () => {
    const item: RecruitmentDetail = blankRecruitmentDetail;
    const findPurpose = (val: number) => {
        const purposeList = [
            {
                label: "新しい技術に触れる",
                value: 0,
            },
            {
                label: "受賞を目指す",
                value: 1,
            },
            {
                label: "友達を増やしたい",
                value: 2,
            },
        ]

        return purposeList.find(v => v.value === val)
    }
    return (
        <>
            <div className="bg-custom-gray-100">
                <div className="container mx-auto">
                    <section className="flex flex-col items-center pt-12 py-8">
                        <img className="rounded-full inline-block w-24 mb-6" src={item.ownerIcon} alt="" />
                        <h2 className="font-bold text-lg mb-4">{item.message}</h2>
                        <div className="mb-4">
                            <span className="font-bold text-custom-gray-base">
                                {DateService.formatTimestamp(new Date(item.startDate))} ~ {DateService.formatTimestamp(new Date(item.endDate))}
                            </span>
                        </div>
                        <div className="text-sm">
                            <span>😆</span><span className="pl-4 font-bold text-custom-gray-base">4/5</span>
                        </div>
                    </section>
                </div>
            </div>
            <div className="bg-custom-blue-100">
                <div className="container mx-auto">
                    <div className="py-12">
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">Purpose</h3>
                            <p className="bg-white text-custom-black-100 font-bold rounded-lg px-4 py-2">{findPurpose(item.purpose)?.label}</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-4">Member</h3>
                            <div>
                                {item.users.map(user => (
                                    <div className="inline-block" key={user.id}>
                                        <img className="w-16 inline-block rounded-full" src={user.icon} alt="" />
                                        <p className="text-center">{user.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )};

export default RecruitmentContent;
