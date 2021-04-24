import React from "react";
import SelectLanguage from "../../containers/commons/forms/SelectLanguage";
import SelectRank from "../../containers/commons/forms/SelectRank";
import {createForm} from "../../services/models/recruitment";
import FormIcon from "../../containers/commons/forms/FormIcon";
import FormTextArea from "../../containers/commons/forms/FormTextArea";
import FormInput from "../../containers/commons/forms/FormInput";
import FormIconInput from "../../containers/commons/forms/FormIconInput";
import ButtonPrimary from "../../containers/commons/buttons/ButtonPrimary";
import FormTerm from "../../containers/commons/forms/FormTerm";
import FormSelectPurpose from "../../containers/commons/forms/FormSelectPurpose";

type Props = {
    handleSetLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleSetRank: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleImage: (i: any) => void,
    handleForm: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, val: string) => void,
    submitRecruitment: () => Promise<void>,
    language: {
        label: string,
        val: string | number | undefined,
        img?: undefined
    },
    rank: {
        label: string,
        val: string | number | undefined,
        img?: undefined
    },
    form: createForm
}

const RecruitmentCreateComponent: React.VFC<Props> = ({handleSetLanguage, handleSetRank, handleImage, handleForm, submitRecruitment, form, language, rank}) =>
    (
    <div className="container px-6 py-14 box-border mx-auto">
        <div className="tablet:w-9/12 mx-auto">
            <section className="flex flex-col items-center pt-12">
                <div className="text-center pt-12 py-8">
                    <div className="relative inline-block">
                        <FormIcon property={form.icon} handleImage={handleImage} inputId="icon"/>
                    </div>
                </div>
            </section>
            <form className="mb-6">
                <FormTextArea property={form.title} handleForm={handleForm} inputId="title">
                    募集内容
                </FormTextArea>
                <FormSelectPurpose property={form.purpose} handleForm={handleForm} inputId="purpose">
                    参加目的
                </FormSelectPurpose>
                <FormInput property={form.event_name} handleForm={handleForm} inputId="event_name">
                    イベント名
                </FormInput>
                <FormIconInput property={form.event_url} handleForm={handleForm} inputId="event_url" icon="ion_link_color.svg">
                    イベントのリンク
                </FormIconInput>
                <FormInput property={form.address} handleForm={handleForm} inputId="address">
                    連絡先
                </FormInput>
                <FormTerm from={form.start_date} to={form.end_date} handleForm={handleForm}>
                    イベント期間
                </FormTerm>
                <div className="mb-4 flex mx-auto justify-between">
                    <div className="w-1/2 mx-1">
                        <SelectLanguage handleSetLanguage={handleSetLanguage} language={language} />
                    </div>
                    <div className="w-1/2 mx-1">
                        <SelectRank handleSetRank={handleSetRank} rank={rank} />
                    </div>
                </div>
                <FormInput property={form.num_of_users} handleForm={handleForm} inputId="num_of_users">
                    募集人数
                </FormInput>
                <p className="text-center font-bold text-custom-black-100 mb-6">
                    現在のチーム人数は<span className="text-custom-blue-base"> {form.num_of_users+1}人 </span>です
                </p>
                <div className="text-center mb-6">
                    <ButtonPrimary handleSubmit={submitRecruitment}>
                        この内容で作成
                    </ButtonPrimary>
                </div>
            </form>
        </div>
    </div>
)

export default RecruitmentCreateComponent;
