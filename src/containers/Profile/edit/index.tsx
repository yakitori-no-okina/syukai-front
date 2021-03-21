import React from "react";
import { User, blankUser } from "../../../services/models/user";

const EditProfile: React.VFC = () => {
    const user: User = blankUser;
    return (
      <div className="container mx-auto">
          <div className="text-center pt-12 py-8">
              <div className="relative inline-block">
                  <img className="rounded-full inline-block w-24" src={user.icon} alt="" />
                  <span className="absolute right-0 bottom-0">a</span>
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
                      <span className="block font-bold text-custom-black-base">github</span>
                      <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="text" id="github"/>
                  </label>
                  <label className="block w-5/12" htmlFor="twitter">
                      <span className="block font-bold text-custom-black-base">twitter</span>
                      <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="text" id="twitter"/>
                  </label>
              </div>

              <label className="block mb-4" htmlFor="link">
                  <span className="block font-bold text-custom-black-base">あなたのリンク</span>
                  <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="text" id="link"/>
              </label>

              <label className="block mb-4" htmlFor="bio">
                  <span className="block font-bold text-custom-black-base">自己紹介</span>
                  <textarea className="w-full bg-custom-gray-200 rounded-lg p-4" id="bio"/>
              </label>
          </form>
          <div className="text-center">
              <button type="button" className="w-8/12 bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-2 px-8">
                  この内容で保存
              </button>
          </div>
      </div>
    );
}

export default EditProfile;
