import React from "react";

type Props = {
    handleSubmit: () => void
}
const ButtonBlack: React.FC<Props> = ({ handleSubmit, children }) => (
    <button onClick={handleSubmit} type="button" className="w-8/12 bg-custom-black-base text-white font-bold text-sm rounded-3xl py-2 px-8">
        {children}
    </button>
)

export default ButtonBlack
