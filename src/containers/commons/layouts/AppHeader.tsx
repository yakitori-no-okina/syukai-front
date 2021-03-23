import React, { useState } from "react";
import AppHeaderComponent from "../../../components/commons/layouts/AppHeader";
import { User, blankUser } from "../../../services/models/user";

const AppHeader: React.VFC = () => {
    const [isNotifyShow, setNotifyFlag] = useState<boolean>(false)
    const [isMenuShow, setMenuFlag] = useState<boolean>(false);
    const user: User = blankUser
    const showNotification = () => setNotifyFlag(!isNotifyShow);
    const showMenu = () => setMenuFlag(!isMenuShow);
    return <AppHeaderComponent
        showNotification={showNotification}
        showMenu={showMenu}
        isNotifyShow={isNotifyShow}
        isMenuShow={isMenuShow}
        user={user}

    />
}

export default AppHeader
