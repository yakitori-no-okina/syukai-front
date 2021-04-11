import React, {useState} from "react";
import SearchComponent from "../../components/Search";
import {Recruitment, blankRecruitment} from "../../services/models/recruitment";

type Prop = {
    label: string,
    val: string | number | undefined,
    img?: undefined
}


const Search: React.VFC = () => {
    const items: Recruitment[] = blankRecruitment;
    const [language, setLanguage] = useState<Prop>({ label: "", val: undefined})
    const [rank, setRank] = useState<Prop>({ label: "", val: undefined})
    const [word, setWord] = useState<string>("")

    const handleSetLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const languageList = [
            { label: "", val: undefined},
            { label: "frontend", val: "frontend"},
            { label: "backend", val: "backend" },
            { label: "management", val: "management" },
            { label: "mobile", val: "mobile" },
            { label: "AI", val: "AI" },
        ]
        const result = languageList.find(item => item.val === e.target.value) as Prop
        setLanguage({
            ...result
        })
    }

    const handleSetRank = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const rankList = [
            { label: "", val: undefined},
            { label: "A", val: 5 },
            { label: "B", val: 4 },
            { label: "C", val: 3 },
            { label: "D", val: 2 },
            { label: "E", val: 1 },
        ]
        const result = rankList.find(item => item.val === Number(e.target.value)) as Prop
        setRank({
            ...result
        })
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setWord(e.target.value)
    }

    return (
        <SearchComponent
            handleSetLanguage={handleSetLanguage}
            handleSetRank={handleSetRank}
            handleSearch={handleSearch}
            items={items}
            language={language}
            rank={rank}
            word={word}
        />
    )
};

export default Search;
