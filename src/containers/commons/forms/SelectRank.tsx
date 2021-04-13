import React from "react";
import SelectFormComponent from "../../../components/commons/forms/SelectForm";

type Props = {
    label: string,
    val: string | number | undefined,
    img?: undefined
}

const SelectRank: React.VFC<{
    rank: Props,
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
            <SelectFormComponent itemList={rankList} val={rank} handleChange={handleSetRank} />
        </>
    );
};

export default SelectRank;
