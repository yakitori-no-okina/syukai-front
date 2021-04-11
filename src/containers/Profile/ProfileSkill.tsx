import React, { useState } from "react";
import {blankUser, User} from "../../services/models/user";
import ProfileSkill from "../../components/Profile/ProfileSkill";

type Prop = {
    label: string,
    val: string | number | undefined,
    img?: undefined
}

const UserSkill: React.VFC = () => {
    const user: User = blankUser;
    const [language, setLanguage] = useState<Prop>({label: "", val: undefined})
    const [rank, setRank] = useState<Prop>({ label: "", val: undefined})


    const handleSetLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setLanguage({
            label: e.target.value,
            val: ""
        })
    }
    const handleSetRank = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setRank({
            label: e.target.value,
            val: ""
        })
    }

    return user ? <ProfileSkill user={user} language={language} rank={rank} handleSetLanguage={handleSetLanguage} handleSetRank={handleSetRank}/> : <div />;
}

export default UserSkill;
