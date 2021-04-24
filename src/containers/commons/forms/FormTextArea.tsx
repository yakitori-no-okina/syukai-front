import React from "react";

type Props = {
    property: string | undefined,
    handleForm: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string) => void,
    inputId: string,
}
const FormTextArea: React.FC<Props> = ({ property, handleForm, inputId, children }) =>
     (
        <label className="block mb-4" htmlFor="about">
            <span className="block font-bold text-custom-black-base">{children}</span>
            <textarea
                value={property}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleForm(e, inputId)}
                className="w-full bg-custom-gray-200 rounded-lg p-4"
                id="about"
            />
        </label>
    )

export default FormTextArea
