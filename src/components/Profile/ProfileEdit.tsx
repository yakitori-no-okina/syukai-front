import React from "react";
import { ProfileForm } from "../../services/models/form";
import FormInput from "../../containers/commons/forms/FormInput";
import FormIconInput from "../../containers/commons/forms/FormIconInput";
import FormTextArea from "../../containers/commons/forms/FormTextArea";
import ButtonPrimary from "../../containers/commons/buttons/ButtonPrimary";
import FormIcon from "../../containers/commons/forms/FormIcon";

type Props = {
    form: ProfileForm,
    handleForm: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string) => void,
    handleImage: (i: any) => void
}
const ProfileEditComponent: React.VFC<Props> = ({ form, handleForm, handleImage }) =>
     (
        <div className="container px-6 py-14 box-border mx-auto">
            <div className="tablet:w-9/12 mx-auto">
                <div className="text-center pt-12 py-8">
                    <div className="relative inline-block">
                        <FormIcon property={form.icon} handleImage={handleImage} inputId="icon"/>
                    </div>
                </div>
                <form className="px-4 py-6">
                    <FormInput handleForm={handleForm} property={form.name} inputId="name">
                        名前
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
                    <FormIconInput property={form.link} handleForm={handleForm} inputId="link" icon="ion_link_color.svg">
                        あなたのリンク
                    </FormIconInput>
                    <FormTextArea property={form.about} handleForm={handleForm} inputId="about">
                        自己紹介
                    </FormTextArea>
                </form>
                <div className="text-center">
                    <ButtonPrimary handleSubmit={() => undefined}>
                        この内容で保存
                    </ButtonPrimary>
                </div>
            </div>
        </div>

    );

export default ProfileEditComponent;
