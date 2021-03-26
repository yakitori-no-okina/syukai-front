import { useState, useEffect } from "react"
import { RecruitmentDetail } from "../services/models/recruitment";
import RecruitmentService from "../services/api/RecruitmentService";

const useRecruitment = (id: number) => {
    const [recruitment, setRecruitment] = useState<RecruitmentDetail | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const res = await (new RecruitmentService())?.getRecruitmentDetail(id)
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
