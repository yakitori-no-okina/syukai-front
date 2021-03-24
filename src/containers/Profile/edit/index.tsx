import React, {useState} from "react";
// import { User, blankUser } from "../../../services/models/user";

type Form = {
    name: string | undefined,
    icon: string | undefined
    github: string | undefined,
    twitter: string | undefined,
    link: string | undefined,
    about: string | undefined
}

const blackForm = {
    name: undefined,
    icon: "https://placehold.jp/150x150.png",
    github: undefined,
    twitter: undefined,
    link: undefined,
    about: undefined
}

const EditProfile: React.VFC = () => {
    const [form, setForm] = useState<Form>(blackForm);

    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string): void => setForm({
        ...form,
        [val]: e.target.value
    })

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


    return (
      <div className="container px-6 py-14 box-border mx-auto">
          <div className="tablet:w-9/12 mx-auto">
              <div className="text-center pt-12 py-8">
                  <div className="relative inline-block">
                      <img className="rounded-full inline-block w-24 h24" src={form.icon} alt="" />
                      <label htmlFor="icon">
                          <input onChange={(i: any) => handleImage(i)} className="hidden" type="file" id="icon"/>
                          <img className="inline-block absolute right-0 bottom-0 rounded-full" src="/images/icons/commons/ion_add_circle.svg" alt=""/>
                      </label>
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
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleForm(e, "about")}
                          className="w-full bg-custom-gray-200 rounded-lg p-4"
                          id="bio"
                      />
                  </label>
              </form>
              <div className="text-center">
                  <button type="button" className="w-64 bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-2 px-8">
                      この内容で保存
                  </button>
              </div>
          </div>
      </div>
    );
}

export default EditProfile;
