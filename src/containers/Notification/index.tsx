import React, {useContext} from "react";
import useNotification from "../../hooks/use-notification";
import {UserContext} from "../../providers/AuthProvider";
import NotificationComponent from "../../components/Notification";
import NotificationService from "../../services/api/NotificationService";

const Notification: React.VFC = () => {
    const { userInfo } = useContext(UserContext)
    const data = JSON.parse(userInfo) as {id: number, token: string}
    const { notification } = useNotification(data.id)

    const handleSubmit = async (userId: number, notificationId: number): Promise<void> => {
        await (new NotificationService()).updateNotification(userId, notificationId)
    }

  return (<NotificationComponent notification={notification} data={data} handleSubmit={handleSubmit} />)
};

export default Notification;
