import React, {useState} from "react";
import ProfileEditComponent from "../../components/Profile/ProfileEdit";

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

    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, val: string): void => setForm({
        ...form,
        [val]: e.target.value
    })

    /* eslint-disable */
    const handleImage = (i: any): void => {
        const file = i.target.files[0]
        if (!file) {
            alert("ファイルを選択して")
            return
        }
        if (file.size > 10000000) {
            alert("ファイルサイズがでかすぎ")
            return
        }
        if (file.type !== "image/jpeg" && file.type !== "image/png") {
            alert("jpegかpngで")
            return
        }

        const reader: any = new FileReader()
        reader.onerror = () => alert("画像の読み取りに失敗しました")
        reader.readAsDataURL(file)
        reader.onload = () => {
            const base64 = reader.result as string
            setForm({
                ...form,
                icon: base64
            })
        }
    };
    /* eslint-disable */

    return <ProfileEditComponent form={form} handleForm={handleForm} handleImage={handleImage}/>;
}

export default EditProfile;
