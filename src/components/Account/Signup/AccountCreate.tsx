import React from "react";
import StepBarComponent from "../../commons/ui/StepBar";
import FormInput from "../../commons/forms/FormInput";
import ButtonSubmitBlack from "../../commons/buttons/ButtonSubmitBlack";

type Props = {
    account: { mail: string | undefined, password: string | undefined },
    handleAccount: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string) => void,
    LinkTo: () => void
}
const AccountCreateComponent: React.VFC<Props> = ({ account, handleAccount, LinkTo }) => (
    <div className="container px-6 py-14 box-border mx-auto h-screen">
        <div className="tablet:w-9/12 mx-auto px-4 py-6">
            <StepBarComponent num={1}/>
            <form className="pt-12 pb-8 mb-6">
                <FormInput property={account.mail} handleForm={handleAccount} inputId="mail">
                    メールアドレス
                </FormInput>
                <FormInput property={account.password} handleForm={handleAccount} inputId="password" type="password">
                    パスワード
                </FormInput>
            </form>
            <div className="text-center">
                <ButtonSubmitBlack handleSubmit={LinkTo}>
                    プロフィール設定へ
                </ButtonSubmitBlack>
            </div>
        </div>
    </div>
);

export default AccountCreateComponent;
