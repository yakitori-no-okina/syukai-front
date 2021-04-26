/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, {useState} from "react";
import {Skill} from "../../services/models/skill";
import SelectLanguage from "../commons/forms/SelectLanguage";
import SelectRank from "../commons/forms/SelectRank";
import {User, blankUser} from "../../services/models/user";

type Props = {
    user: User,
    language: {
        label: string,
        val: string | number | undefined,
        img?: undefined
    },
    rank: {
        label: string,
        val: string | number | undefined,
        img?: undefined
    }
    handleSetLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleSetRank: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}
const ProfileSkill: React.VFC<Props> = ({ user = blankUser, handleSetRank, handleSetLanguage, language, rank }) => {
    const [isOpen, setValue] = useState<boolean>(false);

    const openModal = () => setValue(true);
    const closeModal = () => setValue(false);

    const SearchSkill = (skill: Skill) => {
        const result = {
            skill: "",
            val: 0,
        }
        const userSkills = Object.keys(skill);
        // eslint-disable-next-line
        for (const userSkill of userSkills) {
            if(userSkill === "icon") {
                // eslint-disable-next-line no-continue
                continue
            }
            if(skill[userSkill] === 0) {
                // eslint-disable-next-line no-continue
                continue
            }

            result.val = skill[userSkill] as number
            result.skill = userSkill
        }
        return result
    }

    const findRank = (skill: Skill) => {
        const rankList = [
            { label: "A", val: 5 },
            { label: "B", val: 4 },
            { label: "C", val: 3 },
            { label: "D", val: 2 },
            { label: "E", val: 1 },
        ]
        const res = SearchSkill(skill)

        const hoge = rankList.find(item => item.val === res.val)

        return hoge?.label
    }

    const findSkill = (skill: Skill) => {
        const skillList = [
            { label: "🐶", val: "backend" },
            { label: "🐱", val: "frontend" },
            { label: "🐭", val: "management" },
            { label: "🦊", val: "mobile" },
            { label: "🐼", val: "AI" },
        ]
        const res = SearchSkill(skill)

        const target = skillList.find(item => item.val === res.skill)

        return target
    }

    return (
        <>
            <div className="bg-custom-gray-100">
                <div className="container px-6 py-14 box-border mx-auto">
                    <div className="flex items-center flex-col pt-12">
                        <img className="inline-block mb-8" src="/images/skill/img_skill.svg" alt="skill" />
                        <p className="font-bold text-color-black-base text-2xl">Skillを追加してカスタマイズしよう!</p>
                    </div>
                </div>
            </div>
            <div className="bg-custom-blue-100">
                <div className="container px-6 py-14 box-border mx-auto">
                    <section className="mb-6">
                        <h2 className="font-bold text-lg mb-4">Skills</h2>
                        <div>
                            <div className="flex flex-wrap justify-between">
                                {user.skills?.map((skill: Skill) => (
                                    <div className="inline-block w-40 rounded-lg inline-flex flex-col bg-white p-2 mb-6">
                                        <div className="inline-block font-bold text-custom-black-100">{findSkill(skill)?.val}</div>
                                        <div className="relative text-center inline-block p-4">
                                            <p className="inline-block text-6xl rounded-full">{findSkill(skill)?.label}</p>
                                            <span className="absolute right-0 bottom-0 text-custom-black-base font-bold">{findRank(skill)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div onClick={openModal} className="inline-block mx-1 cursor-pointer rounded-lg bg-custom-blue-100 border border-custom-gray-base p-2">
                                <div className="inline-block p-4">
                                    <img className="inline-block w-16" src="/images/icons/commons/ion_add_color.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {isOpen && (
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60 z-40">
                    <div className="container mx-auto h-screen flex justify-center items-center">
                        <div className="w-5/6 h-auto px-6 py-14 box-border mx-auto bg-custom-gray-100 rounded-lg">
                            <div className="mb-10 flex w-9/12 mx-auto justify-between">
                                <div className="w-1/2 mx-1">
                                    <SelectLanguage handleSetLanguage={handleSetLanguage} language={language} />
                                </div>
                                <div className="w-1/2 mx-1">
                                    <SelectRank handleSetRank={handleSetRank} rank={rank} />
                                </div>
                            </div>
                            <div className="text-center">
                                <button onClick={closeModal} type="button" className="w-8/12 bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-2 px-8">
                                    この内容で保存
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default ProfileSkill
