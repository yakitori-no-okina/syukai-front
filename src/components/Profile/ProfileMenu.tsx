/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from "react";
import {Link} from "react-router-dom";
import {User} from "../../services/models/user";

type Props = {
    user: User,
    userInfo: {id: number, token: string},
    handleLogout: () => void,
}

const ProfileMenuComponent: React.VFC<Props> = ({ user, userInfo, handleLogout }) => (
    <div className="absolute z-30 right-0">
        <div className="container mx-auto box-border rounded-lg shadow-lg bg-white w-48 h-80">
            <Link to={`/${userInfo.id}`}>
                <div className="flex items-center py-2 px-4">
                    <img className="inline-block w-6" src="/images/icons/profile/ion_person-circle-color.svg" alt="" />
                    <p className="break-all text-custom-black-100 leading-none font-bold ml-2">{user.name}</p>
                </div>
            </Link>
            <div className="h-0.5 w-full bg-custom-gray-200" />

            <ul>
                <Link to="/recruitment">
                    <li className="flex items-center py-2 px-4">
                        <img className="inline-block w-6" src="/images/icons/profile/ion_receipt_color.svg" alt="" />
                        <p className="break-all text-custom-black-100 leading-none font-bold ml-2">募集一覧</p>
                    </li>
                </Link>
            </ul>
            <div className="h-0.5 w-full bg-custom-gray-200" />
            <div onClick={handleLogout}>
                <div className="flex items-center py-2 px-4">
                    <img className="inline-block w-6" src="/images/icons/profile/ion_log-out-outline-color.svg" alt="" />
                    <p className="break-all text-custom-black-100 leading-none font-bold ml-2">ログアウト</p>
                </div>
            </div>
        </div>
    </div>
)

export default ProfileMenuComponent;
