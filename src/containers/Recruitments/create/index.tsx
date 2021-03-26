import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { createForm, blackForm } from "../../../services/models/recruitment";
import RecruitmentService from "../../../services/api/RecruitmentService";
import SelectLanguage from "../../commons/forms/SelectLanguage";
import SelectRank from "../../commons/forms/SelectRank";


type Prop = {
    label: string,
    val: string | number | undefined,
    img?: undefined
}


const CreateRecruitment: React.VFC = () => {
    const history = useHistory()
    const [form, setForm] = useState<createForm>(blackForm)
    const [language, setLanguage] = useState<Prop>({ label: "", val: undefined})
    const [rank, setRank] = useState<Prop>({ label: "", val: undefined})

    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, val: string): void => {
        if(val === "num_of_users" || val === "purpose") {
            setForm({
                ...form,
                [val]: Number(e.target.value)
            });
        } else {
            setForm({
                ...form,
                [val]: e.target.value
            });
        }
    };

    const handleSetLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const languageList = [
            { label: "", val: undefined},
            { label: "frontend", val: "frontend"},
            { label: "backend", val: "backend" },
            { label: "management", val: "management" },
            { label: "mobile", val: "mobile" },
            { label: "AI", val: "AI" },
        ]
        const result = languageList.find(item => item.val === e.target.value) as Prop
        setLanguage({
            ...result
        })
    }

    const handleSetRank = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const rankList = [
            { label: "", val: undefined},
            { label: "A", val: 5 },
            { label: "B", val: 4 },
            { label: "C", val: 3 },
            { label: "D", val: 2 },
            { label: "E", val: 1 },
        ]
        const result = rankList.find(item => item.val === Number(e.target.value)) as Prop
        setRank({
            ...result
        })
    }



    /* eslint-disable */
    const handleImage = (i: any): void => {
        const file = i.target.files[0]
        if (!file) {
            alert("ファイルを選択して")
            return
        }
        if (file.size > 10000000) {
            alert("ファイルサイズがでかすぎ")
            return
        }
        if (file.type !== "image/jpeg" && file.type !== "image/png") {
            alert("jpegかpngで")
            return
        }

        const reader: any = new FileReader()
        reader.onerror = () => alert("画像の読み取りに失敗しました")
        reader.readAsDataURL(file)
        reader.onload = () => {
            const base64 = reader.result as string
            setForm({
                ...form,
                icon: base64
            })
        }
    };
    /* eslint-disable */

    const purposeList = [
        {label: "賞を受賞したい", val: 0},
        {label: "新しい技術を触りたい", val: 1},
    ]

    const submitRecruitment = async () => {
        if(!form) return
        const inputForm = {
            ...form,
            conditions: {
                ...form.conditions,
                [language.label]: rank.val
            }
        }

        const res = await (new RecruitmentService()).addRecruitment(inputForm)
        if(res) {
            history.push("/recruitment")
        }
    }

    return (
      <div className="container px-6 py-14 box-border mx-auto">
          <div className="tablet:w-9/12 mx-auto h-screen">
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
                          value={form.message}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleForm(e, "message")}
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
                          value={form.event_link}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, "event_link")}
                          className="w-full bg-custom-gray-200 rounded-lg py-1"
                          type="text"
                          id="link"
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
                  <p className="text-center font-bold text-custom-black-100">
                      現在のチーム人数は<span className="text-custom-blue-base"> {form.num_of_users+1}人 </span>です
                  </p>
              </form>
              <div className="text-center">
                  <button onClick={submitRecruitment} type="button" className="w-64 bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-2 px-8">
                      この内容で作成
                  </button>
              </div>
          </div>
      </div>
  );
};

export default CreateRecruitment;
