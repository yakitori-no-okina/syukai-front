import React from "react";

type Props = {
    handleSubmit: () => void
}
const ButtonSubmit: React.FC<Props> = ({ handleSubmit, children }) => (
    <button onClick={handleSubmit} type="button">
        {children}
    </button>
)

export default ButtonSubmit
