import React, { useState } from "react";
import AppHeaderComponent from "../../../components/commons/layouts/AppHeader";
import { User, blankUser } from "../../../services/models/user";

const AppHeader: React.VFC = () => {
    const [isShow, setValue] = useState<boolean>(false)
    const user: User = blankUser
    const showNotification = () => setValue(!isShow)
    return <AppHeaderComponent handleClick={showNotification} isShow={isShow} user={user} />
}

export default AppHeader
