import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/AuthProvider";
import { User } from "../../services/models/user";
import ProfileMenuComponent from "../../components/Profile/ProfileMenu";

type Props = {
    user: User,
    userInfo: {id: number, token: string}
}
const ProfileMenu: React.VFC<Props> = ({ user, userInfo }) => {
    const history = useHistory()
    const { logout } = useContext(UserContext)
    const handleLogout = () => {
        logout()
        history.push("/")
    }

    return <ProfileMenuComponent
        user={user}
        userInfo={userInfo}
        handleLogout={handleLogout}
    />
};

export default ProfileMenu;
