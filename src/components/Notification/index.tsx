import React from "react";
import {Link} from "react-router-dom";
import {Notify} from "../../services/models/notify";

type Props = {
    notification: Notify[],
    data: { id: number, token: string }
    handleSubmit: (userId: number, notificationId: number) => Promise<void>

}
const NotificationComponent: React.VFC<Props> = ({ notification, handleSubmit, data }) =>
     (
        <div className="absolute z-30 right-0">
            <div className="container px-4 py-2 box-border mx-auto shadow-lg bg-white rounded-lg w-64 h-80 overflow-y-scroll">
                {notification && (
                    <ul>
                        {notification.map((item: Notify) => (
                            <li key={item.id} className="my-3">
                                <div className="flex">
                                    <img className="inline-block rounded-full w-10 h-10" src="https://placehold.jp/150x150.png" alt="" />
                                    <p className="ml-4 break-all leading-none">{item.message}</p>
                                </div>
                                {item.approval_wait_id && (
                                    <div className="text-right">
                                        <button onClick={() => handleSubmit(data.id, item.id)} type="button" className="bg-custom-blue-base text-white  font-bold text-xs rounded-lg py-1 px-6">
                                            承認する
                                        </button>
                                    </div>
                                )}
                                {item.recruitment_id && (
                                    <div className="text-right">
                                        <Link
                                            to={`/recruitment/${item.recruitment_id}`}
                                            className="bg-custom-blue-base text-white font-bold text-xs rounded-lg py-1 px-6"
                                        >
                                            詳しくみる
                                        </Link>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
export default NotificationComponent;
