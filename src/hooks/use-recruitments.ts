import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Recruitment } from "../services/models/recruitment";
import RecruitmentService from "../services/api/RecruitmentService";

const useRecruitments = () => {
    const location = useLocation()
    const [recruitments, setRecruitments] = useState<Recruitment[]>([]);
    const [error, setError] = useState<Error | null>(null);

    const load = async (): Promise<void> => {
        try {
            const res = await (new RecruitmentService())?.getRecruitmentList()
            setRecruitments(res);
            setError(null);
        }catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
       void load();
    },[])

    useEffect(() => {
        void load()
    }, [location])


    return {recruitments, error}
};

export default useRecruitments;
