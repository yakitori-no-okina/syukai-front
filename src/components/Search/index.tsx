import React from "react";
import SelectLanguage from "../commons/forms/SelectLanguage";
import SelectRank from "../commons/forms/SelectRank";
import RecruitmentListComponent from "../Recruitment/RecruitmentList";
import {Recruitment} from "../../services/models/recruitment";
import FormInputSearch from "../commons/forms/FormInputSearch";


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
                <FormInputSearch word={word} handleSearch={handleSearch}/>
            </form>
            <div className="flex justify-center py-8">
                <RecruitmentListComponent RecruitmentList={items}/>
            </div>
        </div>
    );

export default SearchComponent;
