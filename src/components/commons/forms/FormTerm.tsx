import React from "react";
import FormInputDate from "./FormInputDate";

type Props = {
    from: string | undefined,
    to: string | undefined,
    handleForm: (e: React.ChangeEvent<HTMLInputElement>, val: string) => void,
}
const FormTerm: React.FC<Props> = ({ from, to, handleForm, children }) => (
    <>
        <span className="block font-bold text-custom-black-base">
            { children }
        </span>
        <div className="flex justify-between mb-4">
            <FormInputDate property={from} handleForm={handleForm} inputId="start_date"/>
            <span className="font-bold">~</span>
            <FormInputDate property={to} handleForm={handleForm} inputId="end_date"/>
        </div>

    </>
)

export default FormTerm
