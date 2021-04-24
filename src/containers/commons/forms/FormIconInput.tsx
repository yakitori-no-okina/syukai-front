import React from "react";

type Props = {
    property: string | undefined,
    handleForm: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string) => void,
    inputId: string,
    icon: string
}
const FormIconInput: React.FC<Props> = ({ property, handleForm, inputId, icon, children }) =>
     (
        <label className="block" htmlFor={inputId}>
            <span className="block font-bold text-custom-black-base">
              <img className="inline-block mr-1 w-4" src={`/images/icons/links/${icon}`} alt="" />
                {children}
            </span>
            <input
                value={property}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, inputId)}
                className="w-full bg-custom-gray-200 rounded-lg py-1"
                type="text"
                id={inputId}
            />
        </label>
    )

export default FormIconInput
