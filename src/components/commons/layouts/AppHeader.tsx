import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../../services/models/user";
import Notification from "../../../containers/Notification";

const AppHeaderComponent: React.VFC<{
    user: User,
    handleClick: () => void,
    isShow: boolean
}> = ({ user, handleClick, isShow }) => (
  <header className="fixed left-0 right-0 z-50 w-hull bg-custom-black-100 shadow-md">
      <div className="container px-6 py-2 mx-auto">
          <div className="relative">
              <div className="flex justify-between items-center">
                  <h1 className="text-white">
                      <Link to={`/${user.name}`}>
                          <img className="inline-block w-10 rounded-full" src="https://placehold.jp/150x150.png" alt="my icon"/>
                      </Link>
                  </h1>
                  <div className="flex">
                      <Link to="/search">
                          <img className="inline-block mx-2" src="/images/icons/header/ion_search_white.svg" alt="search"/>
                      </Link>
                      <Link to="/">
                          <img className="inline-block mx-2" src="/images/icons/header/ion_chat_white.svg" alt="chat"/>
                      </Link>
                      <button type="button" onClick={handleClick}>
                          <img className="inline-block ml-2" src="/images/icons/header/ion_notifications_white.svg" alt="notifications"/>
                      </button>
                  </div>
              </div>
              {isShow && (
                  <div className="absolute z-50 right-0">
                      <Notification />
                  </div>
              )}
          </div>
      </div>
  </header>
);

export default AppHeaderComponent;
