import React from "react";
import { RecruitmentDetail, blankRecruitmentDetail } from "../../services/models/recruitment";

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
        <div>
            <section className="flex flex-col items-center pb-6">
                <img className="rounded-full inline-block w-16 mb-6" src={item.ownerIcon} alt="" />
                <h2 className="font-bold text-lg mb-4">{item.message}</h2>
                <div className="mb-4">
                    <span>{item.startDate} ~ {item.endDate}</span>
                </div>
                <div className="text-sm">
                    <span>😆</span><span className="pl-4">4/5</span>
                </div>
            </section>
            <section>
                <div className="mb-12">
                    <h3 className="font-bold text-lg">Purpose</h3>
                    <p>{findPurpose(item.purpose)?.label}</p>
                </div>
                <div className="mb-12">
                    <h3 className="font-bold text-lg">Member</h3>
                    <div>
                        {item.users.map(user => (
                            <div key={user.id}>
                                <img className="w-16 inline-block rounded-full" src={user.icon} alt="" />
                                <p>{user.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )};

export default RecruitmentContent;
