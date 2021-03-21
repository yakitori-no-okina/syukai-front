import React from "react";
import { User, blankUser } from "../../services/models/user";

const Profile: React.VFC = () => {
    const user: User = blankUser;
    return (
        <>
            <div className="bg-custom-gray-100">
                <div className="container px-6 py-14 box-border mx-auto">
                    <div className="pt-12 py-8">
                        <div className="flex items-center mb-4">
                            <img className="rounded-full inline-block w-24" src={user.icon} alt="" />
                            <div className="pl-6 mb-4">
                                <p className="font-bold text-lg">{user.name}</p>
                                <p className="text-custom-black-100 mb-2">{user.about}</p>
                                <div>
                                    {user.links.map(link => (
                                        <div className="text-sm" key={link}>
                                            <span>{link}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href={`https://github.com/${user.github}`} target="_blank" rel="noreferrer" className="inline-block mx-2">github</a>
                            <a href={`https://twitter.com/${user.twitter}`} target="_blank" rel="noreferrer" className="inline-block mx-2">twitter</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-custom-blue-100">
                <div className="container px-6 py-14 box-border mx-auto">
                    <div className="py-12">
                        <section className="mb-6">
                            <h2 className="font-bold text-lg mb-4">Skills</h2>
                            <div>
                                <div className="inline-block rounded-lg bg-white p-2">
                                    <div className="relative inline-block p-4">
                                        <img className="inline-block w-16 rounded-full" src="https://placehold.jp/150x150.png" alt="" />
                                        <span className="absolute right-0 bottom-0">A+</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="mb-6">
                            <h2 className="font-bold text-lg mb-4">Joined</h2>
                            <div>
                                <div className="inline-block">
                                    <img className="w-16 inline-block rounded-full" src={user.icon} alt="" />
                                    <p className="text-center">{user.name}</p>
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
