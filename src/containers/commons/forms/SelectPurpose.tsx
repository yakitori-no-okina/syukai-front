import React from "react";
import SelectForm from "./SelectForm";

type Prop = {
    label: string,
    val: string | number | null
}


const SelectPurpose: React.VFC<{
    purpose: Prop, handleSetPurpose: (e: React.ChangeEvent<HTMLSelectElement>) => void
}> = ({purpose,handleSetPurpose}) => {
    const purposeList = [
        {label: "賞を受賞したい", val: 0},
        {label: "新しい技術を触りたい", val: 0},
    ]

    return <SelectForm itemList={purposeList} val={purpose} handleChange={handleSetPurpose}/>
}

export default SelectPurpose;
