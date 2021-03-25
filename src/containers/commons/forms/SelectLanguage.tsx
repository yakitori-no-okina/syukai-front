import React from "react";
import SelectForm from "./SelectForm";

type Prop = {
    label: string,
    val: string | number | null,
    img?: null
}

const SelectLanguage: React.VFC<{language: Prop, handleSetLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void}> = ({ language, handleSetLanguage }) => {
    const languageList = [
        { label: "frontend", val: null},
        { label: "backend", val: "" },
        { label: "manegement", val: "" },
        { label: "Vue", val: "" },
        { label: "Laravel", val: "" },
        { label: "Kotlin", val: "" },
    ]

    return (
        <>
            <span className="text-custom-black-100 font-bold">言語は?</span>
            <SelectForm itemList={languageList} val={language} handleChange={handleSetLanguage} />
        </>
    );
};

export default SelectLanguage;
