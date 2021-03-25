import { useState, useEffect } from "react";
import { Notify } from "../services/models/notify";
import ApiService from "../services/api/ApiService";

const useNotification = (id: number) => {
    const [notification, setNotification] = useState<Notify[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const load = async () : Promise<void> => {
            try {
                const res = await (new ApiService())?.getNotification(id)
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
