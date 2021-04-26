import React from "react";
import ButtonLinkPrimary from "../commons/buttons/ButtonLinkPrimary";
import ButtonLinkBlack from "../commons/buttons/ButtonLinkBlack";

const HomeComponent = () => (
    <div className="container px-6 py-14 box-border mx-auto h-screen">
        <div className="tablet:w-9/12 mx-auto  flex flex-col items-center text-center my-12 tablet:my-24">
            <img className="inline-block mb-12" src="/images/home/img_home.svg" alt="" />
            <ButtonLinkPrimary LinkTo="/login">
                ログイン
            </ButtonLinkPrimary>
            <ButtonLinkBlack LinkTo="/signup?step=1">
                新規登録
            </ButtonLinkBlack>
        </div>
    </div>
);

export default HomeComponent;
