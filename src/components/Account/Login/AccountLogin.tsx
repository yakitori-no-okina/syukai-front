import React from "react";
import {Login} from "../../../services/models/user";
import FormInput from "../../../containers/commons/forms/FormInput";
import ButtonPrimary from "../../../containers/commons/buttons/ButtonPrimary";

type Props = {
    account: Login,
    handleAccount: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string) => void,
    LinkTo: () => void
}

const AccountLoginComponent: React.VFC<Props> = ({ account, handleAccount, LinkTo }) => (
    <div className="container px-6 py-14 box-border mx-auto h-screen">
        <div className="tablet:w-9/12 mx-auto px-4 py-6">
            <form className="mt-36 mb-6">
                <FormInput property={account.mail} handleForm={handleAccount} inputId="mail">
                    メールアドレス
                </FormInput>
                <FormInput property={account.password} handleForm={handleAccount} inputId="password">
                    パスワード
                </FormInput>
            </form>
            <div className="text-center">
                <ButtonPrimary handleSubmit={LinkTo}>
                    ログイン
                </ButtonPrimary>
            </div>
        </div>
    </div>
);

export default AccountLoginComponent;
