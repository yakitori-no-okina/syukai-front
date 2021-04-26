import React from "react";

type Props = {
    property: number,
    handleForm: (e: React.ChangeEvent<HTMLSelectElement>, val: string) => void,
    inputId: string
}
const FormSelectPurpose: React.FC<Props> = ({ property, handleForm, inputId, children }) => {
    const purposeList = [
        {label: "賞を受賞したい", val: 0},
        {label: "新しい技術を触りたい", val: 1},
    ]
    return (
        <>
            <span className="block font-bold text-custom-black-base">
                {children}
            </span>
            <select
                value={property}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleForm(e, inputId)}
                className="inline-block bg-transparent font-bold text-custom-black-100 border-none outline-none w-full bg-custom-gray-200 rounded-md py-2 px-4 mb-4"
            >
                {purposeList.map(item => (
                    <option value={item.val} className="my-3" key={item.val}>
                        {item.label}
                    </option>
                ))}
            </select>

        </>
    )
}

export default FormSelectPurpose
