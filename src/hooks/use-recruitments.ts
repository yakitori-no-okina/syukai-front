import { useState, useEffect } from "react"
import { Recruitment } from "../services/models/recruitment";
import RecruitmentService from "../services/api/RecruitmentService";

const useRecruitments = () => {
    const [recruitments, setRecruitments] = useState<Recruitment[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const res = await (new RecruitmentService())?.getRecruitmentList()
                setRecruitments(res);
                setError(null);
            }catch (e) {
                setError(e);
            }
        }

       void load();
    },[])

    return {recruitments, error}
};

export default useRecruitments;
