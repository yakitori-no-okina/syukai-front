import React from "react";

type Props = {
    property: string | number | undefined,
    handleForm: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string) => void,
    inputId: string,
}
const FormInput: React.FC<Props> = ({ property, handleForm, inputId, children }) =>
     (
        <label className="block mb-4" htmlFor={inputId}>
            <span className="block font-bold text-custom-black-base">{children}</span>
            <input
                value={property}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, inputId)}
                className="w-full bg-custom-gray-200 rounded-lg py-1"
                type="text"
                id={inputId}
            />
        </label>
    )

export default FormInput
