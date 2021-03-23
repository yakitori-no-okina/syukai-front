import React from "react";
import SelectForm from "./SelectForm";

type Prop = {
    label: string,
    val: string | number | null,
    img?: null
}

const SelectRank: React.VFC<{rank: Prop, handleSetRank: (e: React.ChangeEvent<HTMLSelectElement>) => void}> = ({rank, handleSetRank}) => {
    const rankList = [
        { label: "ランクで絞り込み", val: null},
        { label: "A", val: 5 },
        { label: "B", val: 4 },
        { label: "C", val: 3 },
        { label: "D", val: 2 },
        { label: "E", val: 1 },
    ]

    return (
        <>
            <SelectForm itemList={rankList} val={rank} handleChange={handleSetRank} />
        </>
    );
};

export default SelectRank;
