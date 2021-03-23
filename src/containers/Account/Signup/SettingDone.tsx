import React from "react";
import {useHistory} from "react-router-dom";
import StepBarComponent from "../../../components/commons/ui/StepBar";

type Account = {
    mail: string | undefined,
    password: string | undefined
}

type Form = {
    name: string | undefined,
    github: string | undefined,
    twitter: string | undefined,
    link: string | undefined,
    about: string | undefined
}

const SettingDone: React.VFC<{
    account: Account,
    form: Form
}> = ({ account, form }) => {
    const history = useHistory()
    const LinkToStep = () => {
        if(!account && form) return
        history.push("/recruitment")
    }

    return (
        <div className="container px-6 py-14 box-border mx-auto h-screen">
            <div className="tablet:w-9/12 text-center mx-auto px-4 py-6">
                <StepBarComponent num={3} />
                <div className="pt-12">
                    <img className="inline-block mb-8" src="/images/account/img_done.svg" alt="" />
                    <div className="text-center">
                        <button
                            onClick={LinkToStep}
                            type="button"
                            className="w-8/12 bg-custom-black-base text-white font-bold text-sm rounded-3xl py-2 px-8"
                        >
                            登録完了🎉
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingDone;
