import React from "react";
import AccountSettingDoneComponent from "../../../components/Account/Signup/AccountSettingDone";

const AccountSettingDone: React.VFC<{ createUserAccount: () => void }> = ({ createUserAccount }) =>
    (
        <AccountSettingDoneComponent createUserAccount={createUserAccount}/>
    )

export default AccountSettingDone;
