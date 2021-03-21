import React from "react";

const UserLogin: React.VFC = () => (
    <div className="container px-6 py-14 box-border mx-auto">
        <div className="px-4 py-6">
            <form className="mb-6">
                <label className="block mb-4" htmlFor="userName">
                    <span className="block font-bold text-custom-black-base">ユーザー名</span>
                    <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="text" id="userName"/>
                </label>
                <label className="block mb-4" htmlFor="password">
                    <span className="block font-bold text-custom-black-base">パスワード</span>
                    <input className="w-full bg-custom-gray-200 rounded-lg py-1" type="password" id="password"/>
                </label>
            </form>
            <div className="text-center">
                <button type="button" className="w-8/12 bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-2 px-8">
                    ログイン
                </button>
            </div>
        </div>
    </div>
);

export default UserLogin;
