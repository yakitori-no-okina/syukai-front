import React from "react";
import { User, blankUser } from "../../../services/models/user";

const UserSkill: React.VFC = () => {
    const user: User = blankUser;
    return (
        <>
            <div className="bg-custom-gray-100">
                <div className="container mx-auto">
                    <div className="text-center pt-12 py-8">
                        <div className="relative inline-block">
                            <img className="rounded-full inline-block w-24" src={user.icon} alt="" />
                            <span className="absolute right-0 bottom-0">a</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-custom-blue-100">
                <div className="container mx-auto">
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
                </div>
            </div>
        </>
    );
}

export default UserSkill;
