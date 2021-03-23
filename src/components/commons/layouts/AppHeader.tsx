/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../../services/models/user";
import Notification from "../../../containers/Notification";
import ProfileMenu from "../../../containers/Profile/menu";

const AppHeaderComponent: React.VFC<{
    user: User,
    showNotification: () => void,
    showMenu: () => void,
    isNotifyShow: boolean,
    isMenuShow: boolean
}> = ({ user, showNotification, showMenu, isNotifyShow, isMenuShow }) => (
  <header className="fixed left-0 right-0 z-20 w-hull bg-custom-black-100 shadow-md">
      <div className="container px-6 py-2 mx-auto">
          <div className="relative">
              <div className="flex justify-between items-center">
                  <Link to="/">
                      <h1 className="text-white text-white font-bold">
                          syukai
                      </h1>
                  </Link>
                  <div className="flex items-center">
                      <Link to="/search">
                          <img className="inline-block mx-2" src="/images/icons/header/ion_search_white.svg" alt="search"/>
                      </Link>
                      <div onClick={showNotification}>
                          <img className="inline-block mx-2" src="/images/icons/header/ion_notifications_white.svg" alt="notifications"/>
                      </div>
                      <div onClick={showMenu}>
                          <img className="inline-block w-10 rounded-full ml-2" src={user.icon} alt="my icon"/>
                      </div>
                  </div>
              </div>
              {isNotifyShow && (
                  <Notification />
              )}
              {isMenuShow && (
                  <ProfileMenu user={user} />
              )}
          </div>
      </div>
  </header>
);

export default AppHeaderComponent;
