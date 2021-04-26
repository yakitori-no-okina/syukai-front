import React from "react";

type Props = {
    property: string | undefined
    handleForm: (e: React.ChangeEvent<HTMLInputElement>, val: string) => void,
    inputId: string
}
const FormInputDate: React.VFC<Props> = ({ property, handleForm, inputId }) => (
    <label className="w-5/12 block mb-4" htmlFor={inputId}>
        <input
            value={property}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleForm(e, inputId)}
            className="w-full bg-custom-gray-200 rounded-lg py-1"
            type="date"
            id={inputId}
        />
    </label>
)

export default FormInputDate
