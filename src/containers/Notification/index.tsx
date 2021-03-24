import React from "react";
import { Link } from "react-router-dom";
import { Notify, blankNotify } from "../../services/models/notify";

const Notification: React.VFC = () => {
  const notifications: Notify[] = blankNotify;
  return (
      <div className="absolute z-30 right-0">
          <div className="container px-4 py-2 box-border mx-auto shadow-lg bg-white rounded-lg w-64 h-80 overflow-y-scroll">
              <ul>
                  {notifications.map(notification => (
                      <li key={notification.id} className="my-3">
                          <div className="flex">
                              <img className="inline-block rounded-full w-10 h-10" src="https://placehold.jp/150x150.png" alt="" />
                              <p className="ml-4 break-all leading-none">aaaaaaaaaaassssssssssaaaaaaaasass</p>
                          </div>
                          {notification.approvalWaitId && (
                              <div className="text-right">
                                  <button type="button" className="bg-custom-blue-base text-white  font-bold text-xs rounded-lg py-1 px-6">
                                      承認する
                                  </button>
                              </div>
                          )}
                          {notification.recruitmentId && (
                              <div className="text-right">
                                  <Link
                                      to={`/recruitment/${notification.recruitmentId}`}
                                      className="bg-custom-blue-base text-white  font-bold text-xs rounded-lg py-1 px-6"
                                  >
                                      詳しくみる
                                  </Link>
                              </div>
                          )}
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
};

export default Notification;
