import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import ProfileComponent from "../../components/Profile";
import useProfile from "../../hooks/use-profile"
import {UserContext} from "../../providers/AuthProvider";

const Profile: React.VFC = () => {
    const params = useParams<{id: string}>()
    const id = Number(params.id)
    const { userInfo } = useContext(UserContext)
    const data = JSON.parse(userInfo) as {id: number, token: string}
    const { profile } = useProfile(id)

    return (
        profile ? <ProfileComponent data={data} id={id} profile={profile} /> : <div />
    );
}

export default Profile;
