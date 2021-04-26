import React from "react";
import ButtonLink from "./ButtonLink";
import ButtonBlack from "./ButtonBlack";

type Props = {
    LinkTo: string
}
const ButtonLinkBlack: React.FC<Props> = ({ LinkTo, children }) => (
    <>
        <ButtonLink LinkTo={LinkTo}>
            <ButtonBlack>
                {children}
            </ButtonBlack>
        </ButtonLink>
    </>
)

export default ButtonLinkBlack
