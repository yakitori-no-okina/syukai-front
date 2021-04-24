import React, {useState} from "react";
import ProfileEditComponent from "../../components/Profile/ProfileEdit";
import ImageConvert from "../../services/utils/ImageConvert";

type Form = {
    name: string | undefined,
    icon: string | undefined
    github: string | undefined,
    twitter: string | undefined,
    link: string | undefined,
    about: string | undefined
}

const blackForm = {
    name: undefined,
    icon: "https://placehold.jp/150x150.png",
    github: undefined,
    twitter: undefined,
    link: undefined,
    about: undefined
}

const EditProfile: React.VFC = () => {
    const [form, setForm] = useState<Form>(blackForm);
    console.log(form)

    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string): void => setForm({
        ...form,
        [val]: e.target.value
    })

    /* eslint-disable */
    const handleImage = async (i: any): Promise<void> => {
        const image = await ImageConvert(i)
        setForm({
            ...form,
            icon: image
        })
    };
    /* eslint-disable */

    return <ProfileEditComponent form={form} handleForm={handleForm} handleImage={handleImage}/>;
}

export default EditProfile;
