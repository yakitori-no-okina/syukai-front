import React from "react";

const Notification: React.VFC = () => (
    <div className="container px-4 py-2 box-border mx-auto shadow-lg bg-white rounded-lg w-64 h-80 overflow-y-scroll">
        <ul>
            <li className="my-3">
                <div className="flex">
                    <img className="inline-block rounded-full w-10 h-10" src="https://placehold.jp/150x150.png" alt="" />
                    <p className="ml-4 break-all leading-none">aaaaaaaaaaassssssssssaaaaaaaasass</p>
                </div>
                <div className="text-right">
                    <button type="button" className="bg-custom-blue-base text-white  font-bold text-xs rounded-lg py-1 px-6">
                        承認する
                    </button>
                </div>
            </li>
            <li className="my-3">
                <div className="flex">
                    <img className="inline-block rounded-full w-10 h-10" src="https://placehold.jp/150x150.png" alt="" />
                    <p className="ml-4 break-all leading-none">aaaaaaaaaaassssssssssaaaaaaaasass</p>
                </div>
                <div className="text-right">
                    <button type="button" className="bg-custom-blue-base text-white  font-bold text-xs rounded-lg py-1 px-6">
                        承認する
                    </button>
                </div>
            </li>
        </ul>
    </div>
);

export default Notification;
