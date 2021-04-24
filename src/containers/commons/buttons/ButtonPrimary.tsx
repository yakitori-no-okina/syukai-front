import React from "react";

const ButtonPrimary: React.FC = ({ children }) => (
    <button type="button" className="w-64 bg-custom-blue-base text-white font-bold text-sm rounded-3xl py-2 px-8">
        {children}
    </button>
)

export default ButtonPrimary
