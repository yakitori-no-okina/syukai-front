import { useState, useEffect } from "react"
import { User } from "../services/models/user";
import UserProfileService from "../services/api/UserProfileService";

const useProfile = (id: number) => {
    const [profile, setProfile] = useState<User | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const load = async (): Promise<void> => {
            try {
                const res = await (new UserProfileService()).getUserProfile(id)
                setProfile(res)
                setError(null)
            } catch (e) {
                setError(e)
            }
        }
        void load()
    }, [id])

    return {profile, error}
}

export default useProfile;
