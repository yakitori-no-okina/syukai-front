/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { User, blankUser } from "../../../services/models/user";
import SelectLanguage from "../../commons/forms/SelectLanguage";

const UserSkill: React.VFC = () => {
    const user: User = blankUser;
    const [isOpen, setValue] = useState<boolean>(false);
    const openModal = () => setValue(true);
    const closeModal = () => setValue(false);
    return (
        <>
            <div className="bg-custom-gray-100">
                <div className="container px-6 py-14 box-border mx-auto">
                    <div className="text-center pt-12 py-8">
                        <div className="relative inline-block">
                            <img className="rounded-full inline-block w-24" src={user.icon} alt="" />
                            <span className="absolute right-0 bottom-0">a</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-custom-blue-100">
                <div className="container px-6 py-14 box-border mx-auto">
                    <section className="mb-6">
                        <h2 className="font-bold text-lg mb-4">Skills</h2>
                        <div>
                            <div className="inline-block rounded-lg bg-white p-2">
                                <div className="relative inline-block p-4">
                                    <img className="inline-block w-16 rounded-full" src="https://placehold.jp/150x150.png" alt="" />
                                    <span className="absolute right-0 bottom-0">A+</span>
                                </div>
                            </div>
                            <div onClick={openModal} className="inline-block rounded-lg bg-custom-blue-100 border border-custom-gray-base p-2">
                                <div className="inline-block p-4">
                                    <img className="inline-block w-16 rounded-full" src="https://placehold.jp/150x150.png" alt="" />
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
                            <SelectLanguage />
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
    );
}

export default UserSkill;
