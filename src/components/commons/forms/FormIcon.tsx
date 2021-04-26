import React from "react";

type Props = {
    property: string | undefined,
    handleImage: (i: any) => void
    inputId: string,
}
const FormIcon: React.VFC<Props> = ({ property, inputId, handleImage }) => (
    <>
        <img className="rounded-full inline-block w-24 h24" src={property} alt="" />
        <label htmlFor={inputId}>
            <input onChange={(i: React.ChangeEvent<HTMLInputElement>) => handleImage(i)} className="hidden" type="file" id="icon"/>
            <img className="inline-block absolute right-0 bottom-0 rounded-full" src="/images/icons/commons/ion_add_circle.svg" alt=""/>
        </label>
    </>
)

export default FormIcon
