import React from "react";
import ButtonLink from "./ButtonLink";
import ButtonPrimary from "./ButtonPrimary";

type Props = {
    LinkTo: string
}
const ButtonLinkPrimary: React.FC<Props> = ({ LinkTo, children }) => (
    <>
        <ButtonLink LinkTo={LinkTo}>
            <ButtonPrimary>
                {children}
            </ButtonPrimary>
        </ButtonLink>
    </>
)

export default ButtonLinkPrimary
