import React from "react";
import { User, blankUser } from "../../services/models/user";

const ProfileContent: React.VFC = () => {
    const user: User = blankUser;
    return (
        <>
            <div className="mb-8">
                <div className="flex">
                    <img className="rounded-full inline-block w-24" src={user.icon} alt="" />
                    <div className="pl-6">
                        <p>{user.name}</p>
                        <p>{user.about}</p>
                    </div>
                </div>
                <div>
                    <a href={`https://github.com/${user.github}`} target="_blank" rel="noreferrer" className="inline-block mx-2">github</a>
                    <a href={`https://twitter.com/${user.twitter}`} target="_blank" rel="noreferrer" className="inline-block mx-2">twitter</a>
                </div>
                <div>
                    {user.links.map(link => (
                        <div key={link}>
                            <span>{link}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
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
                <section>
                    <h2 className="font-bold text-lg mb-4">Joined</h2>
                    <div>
                        <div className="inline-block">
                            <img className="w-16 inline-block rounded-full" src={user.icon} alt="" />
                            <p className="text-center">{user.name}</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ProfileContent;
