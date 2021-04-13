/*eslint-disable*/

const ImageConvert = async (i: any): Promise<string | undefined> => {

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

    return new Promise((resolve) => {
        const reader: any = new FileReader()
        reader.onerror = () => alert("画像の読み取りに失敗しました")
        reader.onload = () => {
            resolve(reader.result as string)
        }
        reader.readAsDataURL(file)

    })
}

export default ImageConvert
