import React from "react";
import { Link } from "react-router-dom";
import { User, blankUser } from "../../services/models/user";
import { Skill } from "../../services/models/skill";

const Profile: React.VFC = () => {
    const user: User = blankUser;

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

        const rank = rankList.find(item => item.val === res.val)

        return rank?.label
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
                    <div className="pt-12">
                        <div className="flex">
                            <div className="flex flex-col">
                                <img className="rounded-full inline-block w-24 mb-2" src={user.icon} alt="" />
                                <div className="inline-block">
                                    <a href={`https://github.com/${user.github}`} target="_blank" rel="noreferrer" className="inline-block mx-1">
                                        <img className="w-8" src="/images/icons/links/ion_logo-github.svg" alt="github" />
                                    </a>
                                    <a href={`https://twitter.com/${user.twitter}`} target="_blank" rel="noreferrer" className="inline-block mx-1">
                                        <img className="w-8" src="/images/icons/links/ion_logo-twitter.svg" alt="twitter" />
                                    </a>
                                </div>
                            </div>
                            <div className="ml-6 mb-4">
                                <p className="font-bold text-lg">
                                    {user.name}
                                    <Link to={`/${user.name}/edit`}>
                                        <img className="inline-block w-4 mx-1" src="/images/icons/commons/ion_pencil_color.svg" alt="" />
                                    </Link>
                                </p>
                                <p className="text-custom-black-100 break-all mb-2">{user.about}</p>
                                <div>
                                    {user.links.map(link => (
                                        <div className="" key={link}>
                                            <a className="inline-block" href={link} target="_blank" rel="noreferrer">
                                                <img className="inline-block w-4" src="/images/icons/links/ion_link_color.svg" alt=""/>
                                                <span className="inline-block text-sm text-custom-blue-base mx-1">{link}</span>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-custom-blue-100">
                <div className="container px-6 py-14 box-border mx-auto">
                    <div className="">
                        <section className="mb-6">
                            <div className="flex justify-between mb-4">
                                <h2 className="font-bold text-lg">Skills</h2>
                                <Link to={`/${user.name}/skill`} className="bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-1 px-6">
                                    <img className="w-4 inline-block mr-1" src="/images/icons/commons/ion_pencil_white.svg" alt="" />
                                    編集する
                                </Link>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                {user.skills.map((skill: Skill) => (
                                    <div className="inline-block w-40 rounded-lg inline-flex flex-col bg-white p-2 mb-6">
                                        <div className="inline-block font-bold text-custom-black-100">{findSkill(skill)?.val}</div>
                                        <div className="relative text-center inline-block p-4">
                                            <p className="inline-block text-6xl rounded-full">{findSkill(skill)?.label}</p>
                                            <span className="absolute right-0 bottom-0 text-custom-black-base font-bold">{findRank(skill)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="mb-6">
                            <h2 className="font-bold text-lg mb-4">Joined</h2>
                            <div>
                                <div className="inline-block">
                                    <img className="w-16 inline-block rounded-full" src={user.icon} alt="" />
                                    <p className="text-center font-bold text-custom-black-100">{user.name}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
