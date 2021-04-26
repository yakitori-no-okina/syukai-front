import React from "react";

const ButtonBlack: React.FC = ({ children }) => (
    <span className="block w-64 bg-custom-black-base text-white font-bold text-sm rounded-3xl py-2 px-8">
        {children}
    </span>
)

export default ButtonBlack
