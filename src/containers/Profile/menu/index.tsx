/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../../services/models/user";

const ProfileMenu: React.VFC<{
    user: User,
}> = ({ user }) => (
        <div className="absolute z-30 right-0">
            <div className="container mx-auto box-border rounded-lg shadow-lg bg-white w-48 h-80">
                <Link to="/1">
                    <div className="flex items-center py-2 px-4">
                        <img className="inline-block w-8" src="/images/icons/profile/ion_person-circle-color.svg" alt="" />
                        <p className="break-all text-custom-black-100 leading-none font-bold ml-2">{user.name}</p>
                    </div>
                </Link>
                <div className="h-0.5 w-full bg-custom-gray-200" />
                <Link to="/">
                    <div className="flex items-center py-2 px-4">
                        <img className="inline-block w-8" src="/images/icons/profile/ion_log-out-outline-color.svg" alt="" />
                        <p className="break-all text-custom-black-100 leading-none font-bold ml-2">ログアウト</p>
                    </div>
                </Link>
                <Link to="/login">
                    <div className="flex items-center py-2 px-4">
                        <img className="inline-block w-8" src="/images/icons/profile/ion_log-in-outline-color.svg" alt="" />
                        <p className="break-all text-custom-black-100 leading-none font-bold ml-2">ログイン</p>
                    </div>
                </Link>
            </div>
        </div>
    );

export default ProfileMenu;
