import React from "react";
import SelectLanguage from "../../containers/commons/forms/SelectLanguage";
import SelectRank from "../../containers/commons/forms/SelectRank";
import RecruitmentListComponent from "../Recruitment/RecruitmentList";
import {Recruitment} from "../../services/models/recruitment";


type Props = {
    handleSetLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleSetRank: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    items: Recruitment[]
    language: {
        label: string,
        val: string | number | undefined,
        img?: undefined
    },
    rank: {
        label: string,
        val: string | number | undefined,
        img?: undefined
    },
    word: string,
}

const SearchComponent: React.VFC<Props> = ({ handleSetLanguage, handleSetRank, handleSearch, items, language, rank, word }) =>
    (
        <div className="container px-6 py-14 box-border mx-auto h-screen">
            <div className="my-10 flex w-9/12 mx-auto justify-between">
                <div className="w-1/2 mx-1">
                    <SelectLanguage handleSetLanguage={handleSetLanguage} language={language} />
                </div>
                <div className="w-1/2 mx-1">
                    <SelectRank handleSetRank={handleSetRank} rank={rank} />
                </div>
            </div>
            <form className="text-center">
                <div className="relative">
                    <img className="inline-block absolute mt-2 ml-3 w-6" src="/images/icons/commons/ion_search_color.svg" alt="" />
                    <input
                        value={word}
                        onChange={handleSearch}
                        className="w-9/12 inline-block py-2 pl-12 pr-4 bg-custom-gray-200 rounded-3xl"
                        type="text"/>
                </div>
            </form>
            <div className="flex justify-center py-8">
                <RecruitmentListComponent RecruitmentList={items}/>
            </div>
        </div>
    );

export default SearchComponent;
