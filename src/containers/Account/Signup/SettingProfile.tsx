import React, {useState} from "react";
import StepBarComponent from "../../../components/commons/ui/StepBar";

type Form = {
    name: string | undefined,
    github: string | undefined,
    twitter: string | undefined,
    link: string | undefined,
    about: string | undefined
}

const blackForm = {
    name: undefined,
    github: undefined,
    twitter: undefined,
    link: undefined,
    about: undefined
}

const SettingProfile: React.VFC = () => {
    const [form, setForm] = useState<Form>(blackForm)

    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string): void => setForm({
        ...form,
        [val]: e.target.value
    })
    console.log(form)

    return (
        <div className="container px-6 py-14 box-border mx-auto">
            <div className="tablet:w-9/12 mx-auto px-4 py-6">
                <StepBarComponent num={2} />
                <div className="text-center pt-12 pb-8">
                    <div className="relative inline-block">
                        <img className="rounded-full inline-block w-24" src="https://placehold.jp/150x150.png" alt="" />
                        <img className="inline-block absolute right-0 bottom-0 rounded-full" src="/images/icons/commons/ion_add_circle.svg" alt=""/>
                    </div>
                </div>
                <form className="px-4 py-6">
                    <label className="block mb-4" htmlFor="userName">
                        <span className="block font-bold text-custom-black-base">ユーザー名</span>
                        <input
                            value={form.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "name")}
                            className="w-full bg-custom-gray-200 rounded-lg py-1"
                            type="text"
                            id="userName"
                        />
                    </label>

                    <div className="flex justify-between mb-4">
                        <label className="block w-5/12" htmlFor="github">
                            <span className="block font-bold text-custom-black-base">
                              <img className="inline-block mr-1 w-4" src="/images/icons/links/ion_logo-github.svg" alt="" />
                              github
                            </span>
                            <input
                                value={form.github}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "github")}
                                className="w-full bg-custom-gray-200 rounded-lg py-1"
                                type="text"
                                id="github"
                            />
                        </label>
                        <label className="block w-5/12" htmlFor="twitter">
                            <span className="block font-bold text-custom-black-base">
                              <img className="inline-block mr-1 w-4" src="/images/icons/links/ion_logo-twitter.svg" alt="" />
                              twitter
                            </span>
                            <input
                                value={form.twitter}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "twitter")}
                                className="w-full bg-custom-gray-200 rounded-lg py-1"
                                type="text"
                                id="twitter"
                            />
                        </label>
                    </div>

                    <label className="block mb-4" htmlFor="link">
                        <span className="block font-bold text-custom-black-base">
                          <img className="inline-block mr-1 w-5" src="/images/icons/links/ion_link_color.svg" alt="" />
                          あなたのリンク
                        </span>
                        <input
                            value={form.link}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "link")}
                            className="w-full bg-custom-gray-200 rounded-lg py-1"
                            type="text"
                            id="link"
                        />
                    </label>

                    <label className="block mb-4" htmlFor="bio">
                        <span className="block font-bold text-custom-black-base">自己紹介</span>
                        <textarea
                            value={form.about}
                            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleForm(e, "about")}
                            className="w-full bg-custom-gray-200 rounded-lg p-4"
                            id="bio"/>
                    </label>
                </form>
                <div className="text-center">
                    <button type="button" className="w-64 bg-custom-black-base text-white font-bold text-sm rounded-3xl py-2 px-8">
                        この内容で登録
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingProfile;
