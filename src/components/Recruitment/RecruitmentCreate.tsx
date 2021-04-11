import React from "react";
import SelectLanguage from "../../containers/commons/forms/SelectLanguage";
import SelectRank from "../../containers/commons/forms/SelectRank";
import {createForm} from "../../services/models/recruitment";

type Prop = {
    handleSetLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleSetRank: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleImage: (i: any) => void,
    handleForm: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, val: string) => void,
    submitRecruitment: () => Promise<void>,
    language: {
        label: string,
        val: string | number | undefined,
        img?: undefined
    },
    rank: {
        label: string,
        val: string | number | undefined,
        img?: undefined
    },
    form: createForm
}

const RecruitmentCreateComponent: React.VFC<Prop> = ({handleSetLanguage, handleSetRank, handleImage, handleForm, submitRecruitment, form, language, rank}) => {
    const purposeList = [
        {label: "賞を受賞したい", val: 0},
        {label: "新しい技術を触りたい", val: 1},
    ]

    return (
    <div className="container px-6 py-14 box-border mx-auto">
        <div className="tablet:w-9/12 mx-auto">
            <section className="flex flex-col items-center pt-12">
                <div className="text-center pt-12 py-8">
                    <div className="relative inline-block">
                        <img className="rounded-full inline-block w-24" src={form.icon} alt="" />
                        <label htmlFor="icon">
                            <input onChange={(i: React.ChangeEvent<HTMLInputElement>) => handleImage(i)} className="hidden" type="file" id="icon"/>
                            <img className="inline-block absolute right-0 bottom-0 rounded-full" src="/images/icons/commons/ion_add_circle.svg" alt=""/>
                        </label>
                    </div>
                </div>
            </section>
            <form className="mb-6">
                <label className="block mb-4" htmlFor="content">
                    <span className="block font-bold text-custom-black-base">募集内容</span>
                    <textarea
                        value={form.title}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleForm(e, "title")}
                        className="w-full bg-custom-gray-200 rounded-lg p-4"
                        id="content"
                    />
                </label>
                <span className="block font-bold text-custom-black-base">
                      参加目的
                  </span>
                <select
                    value={form.purpose}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleForm(e, "purpose")}
                    className="inline-block bg-transparent font-bold text-custom-black-100 border-none outline-none w-full bg-custom-gray-200 rounded-md py-2 px-4 mb-4"
                >
                    {purposeList.map(item => (
                        <option value={item.val} className="my-3" key={item.val}>
                            {item.label}
                        </option>
                    ))}
                </select>
                <label className="block mb-4" htmlFor="eventName">
                      <span className="block font-bold text-custom-black-base">
                          イベント名
                      </span>
                    <input
                        value={form.event_name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "event_name")}
                        className="w-full bg-custom-gray-200 rounded-lg py-1"
                        type="text"
                        id="eventName"
                    />
                </label>
                <label className="block mb-4" htmlFor="link">
                      <span className="block font-bold text-custom-black-base">
                          <img className="inline-block mr-1 w-5" src="/images/icons/links/ion_link_color.svg" alt="" />
                          イベントのリンク
                      </span>
                    <input
                        value={form.event_url}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "event_url")}
                        className="w-full bg-custom-gray-200 rounded-lg py-1"
                        type="text"
                        id="link"
                    />
                </label>
                <label className="block mb-4" htmlFor="address">
                      <span className="block font-bold text-custom-black-base">
                          連絡先
                      </span>
                    <input
                        value={form.address}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "address")}
                        className="w-full bg-custom-gray-200 rounded-lg py-1"
                        type="text"
                        id="address"
                    />
                </label>
                <span className="block font-bold text-custom-black-base">
                    イベント期間
                  </span>
                <div className="flex justify-between mb-4">
                    <label className="w-5/12 block mb-4" htmlFor="from">
                        <input
                            value={form.start_date}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "start_date")}
                            className="w-full bg-custom-gray-200 rounded-lg py-1"
                            type="date"
                            id="from"
                        />
                    </label>
                    <span className="font-bold">~</span>
                    <label className="w-5/12 block mb-4" htmlFor="to">
                        <input
                            value={form.end_date}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "end_date")}
                            className="w-full bg-custom-gray-200 rounded-lg py-1"
                            type="date"
                            id="to"
                        />
                    </label>
                </div>
                <div className="mb-4 flex mx-auto justify-between">
                    <div className="w-1/2 mx-1">
                        <SelectLanguage handleSetLanguage={handleSetLanguage} language={language} />
                    </div>
                    <div className="w-1/2 mx-1">
                        <SelectRank handleSetRank={handleSetRank} rank={rank} />
                    </div>
                </div>
                <label className="block mb-4" htmlFor="num_of_users">
                  <span className="block font-bold text-custom-black-base">
                      募集人数
                  </span>
                    <input
                        value={form.num_of_users}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "num_of_users")}
                        className="w-5/12 bg-custom-gray-200 rounded-lg py-1"
                        type="number"
                        id="num_of_users"
                    /> 人
                </label>
                <p className="text-center font-bold text-custom-black-100 mb-6">
                    現在のチーム人数は<span className="text-custom-blue-base"> {form.num_of_users+1}人 </span>です
                </p>
                <div className="text-center mb-6">
                    <button onClick={submitRecruitment} type="button" className="w-64 bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-2 px-8">
                        この内容で作成
                    </button>
                </div>
            </form>
        </div>
    </div>
)}

export default RecruitmentCreateComponent;
