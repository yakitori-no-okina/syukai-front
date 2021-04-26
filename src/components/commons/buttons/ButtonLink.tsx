import React from "react";
import { Link } from "react-router-dom";

type Props = {
    LinkTo: string
}
const ButtonSubmit: React.FC<Props> = ({ LinkTo, children }) => (
    <>
        <Link to={LinkTo}>
            {children}
        </Link>
    </>
)

export default ButtonSubmit
