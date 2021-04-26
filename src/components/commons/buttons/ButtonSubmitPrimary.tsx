import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import ButtonPrimary from "./ButtonPrimary";

type Props = {
    handleSubmit: () => void
}
const ButtonSubmitPrimary: React.FC<Props> = ({ handleSubmit, children }) => (
    <ButtonSubmit handleSubmit={handleSubmit}>
        <ButtonPrimary>
            {children}
        </ButtonPrimary>
    </ButtonSubmit>
)

export default ButtonSubmitPrimary
