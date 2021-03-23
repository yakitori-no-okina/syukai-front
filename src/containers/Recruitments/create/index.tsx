import React from "react";

const CreateRecruitment: React.VFC = () => (
    <div className="container px-6 py-14 box-border mx-auto h-screen">
        <div className="tablet:w-9/12 mx-auto">
            <section className="flex flex-col items-center pt-12">
                <div className="text-center pt-12 py-8">
                    <div className="relative inline-block">
                        <img className="rounded-full inline-block w-24" src="https://placehold.jp/150x150.png" alt="" />
                        <img className="inline-block absolute right-0 bottom-0 rounded-full" src="/images/icons/commons/ion_add_circle.svg" alt=""/>
                    </div>
                </div>
            </section>
            <form className="mb-6">
                <label className="block mb-4" htmlFor="content">
                    <span className="block font-bold text-custom-black-base">募集内容</span>
                    <textarea className="w-full bg-custom-gray-200 rounded-lg p-4" id="content"/>
                </label>
                <label className="block mb-4" htmlFor="link">
                  <span className="block font-bold text-custom-black-base">
                      <img className="inline-block mr-1 w-5" src="/images/icons/links/ion_link_color.svg" alt="" />
                      イベントのリンク
                  </span>
                    <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="text" id="link"/>
                </label>
                <span className="block font-bold text-custom-black-base">
                    イベント期間
                </span>
                <div className="flex justify-between">
                    <label className="w-5/12 block mb-4" htmlFor="from">
                        <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="date" id="from"/>
                    </label>
                    <span className="font-bold">~</span>
                    <label className="w-5/12 block mb-4" htmlFor="to">
                        <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="date" id="to"/>
                    </label>
                </div>
                <label className="block mb-4" htmlFor="num_of_users">
                  <span className="block font-bold text-custom-black-base">
                      募集人数
                  </span>
                    <input className="w-5/12 bg-custom-gray-200 rounded-lg py-1" type="number" id="num_of_users"/> 人
                </label>
                <p className="text-center font-bold text-custom-black-100">
                    現在のチーム人数は<span className="text-custom-blue-base">1人</span>です
                </p>
            </form>
            <div className="text-center">
                <button type="button" className="w-64 bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-2 px-8">
                    この内容で作成
                </button>
            </div>
        </div>
    </div>
);

export default CreateRecruitment;
