import React from "react";
import SelectForm from "./SelectForm";

type Prop = {
    label: string,
    val: string | number | undefined,
    img?: undefined
}

const SelectRank: React.VFC<{
    rank: Prop,
    handleSetRank: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}> = ({rank, handleSetRank}) => {
    const rankList = [
        { label: "", val: undefined},
        { label: "A", val: 5 },
        { label: "B", val: 4 },
        { label: "C", val: 3 },
        { label: "D", val: 2 },
        { label: "E", val: 1 },
    ]

    return (
        <>
            <span className="text-custom-black-100 font-bold">ランクは?</span>
            <SelectForm itemList={rankList} val={rank} handleChange={handleSetRank} />
        </>
    );
};

export default SelectRank;
