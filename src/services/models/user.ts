import { Skill } from "./skill";

export type InitUser = {
    name: string,
    icon: string,
    mail: string,
    password: string,
    github: string,
    twitter: string,
    about: string,
    links: string[],
};

export type User = {
    name: string,
    icon: string,
    github: string,
    twitter: string,
    about: string,
    links: string[],
    skills: Skill,
};

export const blankUser: User = {
    name: "tame",
    icon: "https://placehold.jp/150x150.png",
    github: "tamemoto",
    twitter: "@yusuke_prog_web",
    about: "よろしくね!",
    links: [
        "https://tamblog.net/",
    ],
    skills: {
        backend: {
            value: 13,
            detail: [
                {
                    name: "Golang",
                    value: 6
                },
                {
                    name: "Python",
                    value: 7
                }
            ]
        },
        frontend: {
            value: 13,
            detail: [
                {
                    name: "React",
                    value: 6
                },
                {
                    name: "Nuxt",
                    value: 7
                }
            ]
        },
        management: {
            value: 7,
            detail: [
                {
                    name: "Leader",
                    value: 7
                }
            ]
        },
        mobile: {
            value: 8,
            detail: [
                {
                    name: "swift",
                    value: 5
                },
                {
                    name: "kotlin",
                    value: 3
                }
            ]
        },
        AI: {
            value: 22,
            detail: [
                {
                    name: "RNN",
                    "value": 7
                },
                {
                    name: "自然言語処理",
                    value: 8
                },
                {
                    name: "画像認識",
                    "value": 7
                }
            ]
        }
    }
};
