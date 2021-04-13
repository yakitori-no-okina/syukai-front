import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom"
import { createForm, blackForm } from "../../services/models/recruitment";
import RecruitmentService from "../../services/api/RecruitmentService";
import {UserContext} from "../../providers/AuthProvider";
import RecruitmentCreateComponent from "../../components/Recruitment/RecruitmentCreate";
import ImageConvert from "../../services/utils/ImageConvert";


type Props = {
    label: string,
    val: string | number | undefined,
    img?: undefined
}


const CreateRecruitment: React.VFC = () => {
    const { userInfo } = useContext(UserContext)
    const data = JSON.parse(userInfo) as { id: number, token: string }
    const history = useHistory()
    const [form, setForm] = useState<createForm>({...blackForm})
    const [language, setLanguage] = useState<Props>({ label: "", val: undefined})
    const [rank, setRank] = useState<Props>({ label: "", val: undefined})

    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, val: string): void => {
        if(val === "num_of_users" || val === "purpose") {
            setForm({
                ...form,
                [val]: Number(e.target.value)
            });
        } else {
            setForm({
                ...form,
                [val]: e.target.value
            });
        }
    };

    const handleSetLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const languageList = [
            { label: "", val: undefined},
            { label: "frontend", val: "frontend"},
            { label: "backend", val: "backend" },
            { label: "management", val: "management" },
            { label: "mobile", val: "mobile" },
            { label: "AI", val: "AI" },
        ]
        const result = languageList.find(item => item.val === e.target.value) as Props
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
        const result = rankList.find(item => item.val === Number(e.target.value)) as Props
        setRank({
            ...result
        })
    }

    /*eslint-disable*/
    const handleImage = async (i: any): Promise<void> => {
        const image = await ImageConvert(i)
        setForm({
            ...form,
            icon: image
        })
    };


    const submitRecruitment = async (): Promise<void> => {
        if(!form) return
        const inputForm = {
            ...form,
            owner_id: data.id,
            conditions: {
                ...form.conditions,
                [language.label]: rank.val
            }
        }
        const res = await (new RecruitmentService()).addRecruitment(inputForm)
        if(res) {
            history.push("/recruitment")
        }
    }

    return <RecruitmentCreateComponent
        handleSetLanguage={handleSetLanguage}
        handleSetRank={handleSetRank}
        handleImage={handleImage}
        handleForm={handleForm}
        submitRecruitment={submitRecruitment}
        language={language}
        rank={rank}
        form={form}
    />;
};

export default CreateRecruitment;
