import React from "react";
import StepBarComponent from "../../commons/ui/StepBar";
import FormIcon from "../../../containers/commons/forms/FormIcon";
import FormInput from "../../../containers/commons/forms/FormInput";
import FormIconInput from "../../../containers/commons/forms/FormIconInput";
import FormTextArea from "../../../containers/commons/forms/FormTextArea";
import ButtonBlack from "../../../containers/commons/buttons/ButtonBlack";

type Profile = {
    name: string | undefined,
    icon: string | undefined,
    github: string | undefined,
    twitter: string | undefined,
    links: string[] | [],
    about: string | undefined
}

type Props = {
    form: Profile,
    handleForm: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string) => void,
    handleImage: (i: React.ChangeEvent<HTMLInputElement>) => void,
    LinkToStep: () => void,
}

const AccountSettingProfileComponent: React.VFC<Props> = ({ form, handleForm, handleImage, LinkToStep }) => (
    <div className="container px-6 py-14 box-border mx-auto">
        <div className="tablet:w-9/12 mx-auto px-4 py-6">
            <StepBarComponent num={2} />
            <div className="text-center pt-12 pb-8">
                <div className="relative inline-block">
                    <FormIcon property={form.icon} handleImage={handleImage} inputId="icon"/>
                </div>
            </div>
            <form className="px-4 py-6">
                <FormInput handleForm={handleForm} property={form.name} inputId="name">
                    ユーザー名前
                </FormInput>
                <div className="flex justify-between mb-4">
                    <div className="w-5/12">
                        <FormIconInput property={form.github} handleForm={handleForm} inputId="github" icon="ion_logo-github.svg">
                            github
                        </FormIconInput>
                    </div>
                    <div className="w-5/12">
                        <FormIconInput property={form.twitter} handleForm={handleForm} inputId="twitter" icon="ion_logo-twitter.svg">
                            twitter
                        </FormIconInput>
                    </div>
                </div>
                <FormIconInput property={form.links[0]} handleForm={handleForm} inputId="link" icon="ion_link_color.svg">
                    あなたのリンク
                </FormIconInput>
                <FormTextArea property={form.about} handleForm={handleForm} inputId="about">
                    自己紹介
                </FormTextArea>
            </form>
            <div className="text-center">
                <ButtonBlack handleSubmit={LinkToStep}>
                    この内容で登録
                </ButtonBlack>
            </div>
        </div>
    </div>
);

export default AccountSettingProfileComponent;
