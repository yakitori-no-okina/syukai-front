import React from "react";
import SelectForm from "./SelectForm";

type Prop = {
    label: string,
    val: string | number | undefined,
    img?: undefined
}

const SelectLanguage: React.VFC<{language: Prop, handleSetLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void}> = ({ language, handleSetLanguage }) => {
    const languageList = [
        { label: "", val: undefined},
        { label: "frontend", val: "frontend"},
        { label: "backend", val: "backend" },
        { label: "management", val: "management" },
        { label: "mobile", val: "mobile" },
        { label: "AI", val: "AI" },
    ]
    return (
        <>
            <span className="text-custom-black-100 font-bold">言語は?</span>
            <SelectForm itemList={languageList} val={language} handleChange={handleSetLanguage} />
        </>
    );
};

export default SelectLanguage;
