import React from "react";
import StepBarComponent from "../../commons/ui/StepBar";

type Props = {
    createUserAccount: () => void
}
const AccountSettingDoneComponent: React.VFC<Props> = ({ createUserAccount }) => (
    <div className="container px-6 py-14 box-border mx-auto h-screen">
        <div className="tablet:w-9/12 text-center mx-auto px-4 py-6">
            <StepBarComponent num={3} />
            <div className="pt-12">
                <img className="inline-block mb-8" src="/images/account/img_done.svg" alt="" />
                <div className="text-center">
                    <button
                        onClick={createUserAccount}
                        type="button"
                        className="w-8/12 bg-custom-black-base text-white font-bold text-sm rounded-3xl py-2 px-8"
                    >
                        登録完了🎉
                    </button>
                </div>
            </div>
        </div>
    </div>
)

export default AccountSettingDoneComponent;
