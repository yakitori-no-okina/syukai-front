import React from "react";
import StepBarComponent from "../../../components/commons/ui/StepBar";

const SettingProfile: React.VFC = () => (
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
                    <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="text" id="userName"/>
                </label>
                <label className="block mb-4" htmlFor="displayName">
                    <span className="block font-bold text-custom-black-base">表示名</span>
                    <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="text" id="displayName"/>
                </label>

                <div className="flex justify-between mb-4">
                    <label className="block w-5/12" htmlFor="github">
                      <span className="block font-bold text-custom-black-base">
                          <img className="inline-block mr-1 w-4" src="/images/icons/links/ion_logo-github.svg" alt="" />
                          github
                      </span>
                        <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="text" id="github"/>
                    </label>
                    <label className="block w-5/12" htmlFor="twitter">
                      <span className="block font-bold text-custom-black-base">
                          <img className="inline-block mr-1 w-4" src="/images/icons/links/ion_logo-twitter.svg" alt="" />
                          twitter
                      </span>
                        <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="text" id="twitter"/>
                    </label>
                </div>

                <label className="block mb-4" htmlFor="link">
                  <span className="block font-bold text-custom-black-base">
                      <img className="inline-block mr-1 w-5" src="/images/icons/links/ion_link_color.svg" alt="" />
                      あなたのリンク
                  </span>
                    <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="text" id="link"/>
                </label>

                <label className="block mb-4" htmlFor="bio">
                    <span className="block font-bold text-custom-black-base">自己紹介</span>
                    <textarea className="w-full bg-custom-gray-200 rounded-lg p-4" id="bio"/>
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

export default SettingProfile;
