import React, {useContext, useState} from "react";
import AppHeaderComponent from "../../../components/commons/layouts/AppHeader";
import {UserContext} from "../../../providers/AuthProvider";
import useProfile from "../../../hooks/use-profile";



const AppHeader: React.VFC = () => {
    const [isNotifyShow, setNotifyFlag] = useState<boolean>(false)
    const [isMenuShow, setMenuFlag] = useState<boolean>(false);

    const { userInfo } = useContext(UserContext)
    const data = JSON.parse(userInfo) as {id: number, token: string}
    const { profile } = useProfile(data.id)

    const showNotification = () => setNotifyFlag(!isNotifyShow);
    const showMenu = () => setMenuFlag(!isMenuShow);
    return <AppHeaderComponent
        showNotification={showNotification}
        showMenu={showMenu}
        isNotifyShow={isNotifyShow}
        isMenuShow={isMenuShow}
        user={profile}
        userInfo={data}

    />
}

export default AppHeader
