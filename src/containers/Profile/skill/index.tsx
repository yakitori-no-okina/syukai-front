/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import SelectLanguage from "../../commons/forms/SelectLanguage";
import SelectRank from "../../commons/forms/SelectRank";

type Prop = {
    label: string,
    val: string | number | null,
    img?: null
}

const UserSkill: React.VFC = () => {
    const [isOpen, setValue] = useState<boolean>(false);
    const openModal = () => setValue(true);
    const closeModal = () => setValue(false);
    const [language, setLanguage] = useState<Prop>({label: "", val: null})
    const [rank, setRank] = useState<Prop>({ label: "", val: null})


    const handleSetLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setLanguage({
            label: e.target.value,
            val: ""
        })
    }

    const handleSetRank = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setRank({
            label: e.target.value,
            val: ""
        })
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
                            <div className="inline-block mx-1 rounded-lg bg-white p-2">
                                <div className="relative inline-block p-4">
                                    <img className="inline-block w-16 rounded-full" src="https://placehold.jp/150x150.png" alt="" />
                                    <span className="absolute right-0 bottom-0 text-custom-black-base font-bold">A+</span>
                                </div>
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
    );
}

export default UserSkill;
