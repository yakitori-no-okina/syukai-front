import React from "react";
import SelectForm from "./SelectForm";

type Prop = {
    label: string,
    val: string | number | null,
    img?: null
}

const SelectLanguage: React.VFC<{language: Prop, handleSetLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void}> = ({ language, handleSetLanguage }) => {
    const languageList = [
        { label: "言語で絞り込み", val: null},
        { label: "Ruby", val: "" },
        { label: "Nuxt", val: "" },
        { label: "Vue", val: "" },
        { label: "Laravel", val: "" },
        { label: "Kotlin", val: "" },
    ]

    return (
        <>
            <SelectForm itemList={languageList} val={language} handleChange={handleSetLanguage} />
        </>
    );
};

export default SelectLanguage;
