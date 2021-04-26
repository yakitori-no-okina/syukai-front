import React from "react";

type Props = {
    word: string
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const FormInputSearch: React.VFC<Props> = ({ word, handleSearch }) => (
    <>
        <img className="inline-block absolute mt-2 ml-3 w-6" src="/images/icons/commons/ion_search_color.svg" alt="" />
        <input
            value={word}
            onChange={handleSearch}
            className="w-9/12 inline-block py-2 pl-12 pr-4 bg-custom-gray-200 rounded-3xl"
            type="text"
        />
    </>
)

export default FormInputSearch
