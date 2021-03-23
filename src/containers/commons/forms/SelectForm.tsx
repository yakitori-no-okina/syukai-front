import React from "react";

type Prop = {
    label: string,
    val: string | number | null
}

const SelectForm: React.VFC<{itemList: Prop[], val: Prop, handleChange: (e: React.ChangeEvent<HTMLSelectElement>)=>void}> = ({itemList, handleChange, val}) =>
    (
        <div className="container box-border mx-auto">
            <select
                value={val.label}
                onChange={handleChange}
                className="inline-block bg-transparent font-bold text-custom-black-100 border-none outline-none w-full bg-custom-gray-200 rounded-md py-2 px-4"
            >
                {itemList.map(item => (
                    <option value={item.label} className="my-3" key={item.label}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );

export default SelectForm;
