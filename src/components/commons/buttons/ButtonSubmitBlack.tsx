import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import ButtonBlack from "./ButtonBlack";

type Props = {
    handleSubmit: () => void
}
const ButtonSubmitBlack: React.FC<Props> = ({ handleSubmit, children }) => (
    <ButtonSubmit handleSubmit={handleSubmit}>
        <ButtonBlack>
            {children}
        </ButtonBlack>
    </ButtonSubmit>
)

export default ButtonSubmitBlack
