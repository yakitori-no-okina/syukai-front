import { useState, useEffect } from "react";
import { Notify, blankNotify } from "../services/models/notify";
import NotificationService from "../services/api/NotificationService";

const useNotification = (id: number) => {
    const [notification, setNotification] = useState<Notify[]>([...blankNotify]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const load = async () : Promise<void> => {
            try {
                const res = await (new NotificationService())?.getNotification(id)
                setNotification(res)
                setError(null)
            }catch (e) {
                setError(e)
            }
        }

        void load();
    }, [id])

    return { notification, error }
};

export default useNotification;
