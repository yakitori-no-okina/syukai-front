import React from "react";
import { Link } from "react-router-dom";
import { User, blankUser } from "../../services/models/user";

const Profile: React.VFC = () => {
    const user: User = blankUser;
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
                            <div>
                                <div className="inline-block rounded-lg bg-white p-2">
                                    <div className="relative inline-block p-4">
                                        <img className="inline-block w-16 rounded-full" src="https://placehold.jp/150x150.png" alt="" />
                                        <span className="absolute right-0 bottom-0 text-custom-black-base font-bold">A+</span>
                                    </div>
                                </div>
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
