import React from "react";

type Form = {
    label: string,
    val: string | number | undefined
}

type Props = {
    itemList: Form[],
    val: number | string | undefined,
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>)=>void
}

const SelectFormComponent: React.VFC<Props> = ({ itemList, val, handleChange }) => (
    <div className="container box-border mx-auto">
        <select
            value={val}
            onChange={handleChange}
            className="inline-block bg-transparent font-bold text-custom-black-100 border-none outline-none w-full bg-custom-gray-200 rounded-md py-2 px-4"
        >
            {itemList.map(item => (
                <option value={item.val} className="my-3" key={item.label}>
                    {item.label}
                </option>
            ))}
        </select>
    </div>
);

export default SelectFormComponent;
