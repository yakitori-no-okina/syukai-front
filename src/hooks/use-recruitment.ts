import { useState, useEffect } from "react"
import { Recruitment } from "../services/models/recruitment";
import ApiService from "../services/api/ApiService";

const useRecruitment = (id: number) => {
    const [recruitment, setRecruitment] = useState<Recruitment | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const res = await (new ApiService())?.getRecruitmentDetail(id)
                setRecruitment(res);
                setError(null);
            }catch (e) {
                setError(e);
            }
        }

        void load()
    },[id])

    return {recruitment, error}
};

export default useRecruitment;
