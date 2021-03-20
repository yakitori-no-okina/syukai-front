import React from "react";
import { User, blankUser } from "../../services/models/user";

const ProfileContent: React.VFC = () => {
    const user: User = blankUser;
    return (
        <div>
            <section>
                <div className="flex ">
                    <div>
                        <img src={user.icon} alt="" />
                    </div>
                    <div>
                        <p>{user.name}</p>
                        <p>{user.about}</p>
                    </div>
                </div>
                <div>
                    <span className="inline-block mx-2">{user.github}</span>
                    <span className="inline-block mx-2">{user.twitter}</span>
                </div>
                <div>
                    {user.links.map(link => (
                        <div key={link}>
                            <span>{link}</span>
                        </div>
                    ))}
                </div>
            </section>
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
        </div>
    );
}

export default ProfileContent;
