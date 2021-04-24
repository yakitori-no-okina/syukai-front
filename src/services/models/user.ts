import { Skill } from "./skill";

export type InitUser = {
    name: string | undefined,
    icon: string | undefined,
    mail: string | undefined,
    password: string | undefined,
    github: string | undefined,
    twitter: string | undefined,
    about: string | undefined,
    links: string[] | [],
};

export type Login = {
    mail: string | undefined,
    password: string | undefined
}

export type User = {
    name: string,
    icon: string,
    github: string,
    twitter: string,
    about: string,
    links: string[],
    skills: Skill[] | null,
    team_id: number,
    team_icon: string
};

export type loginUserProfile = {
    id: number,
    name: string,
    icon: string,
    github: string,
    twitter: string,
    about: string,
    links: string[],
    skills: Skill[],
}

export const blankUser: User = {
    name: "tame",
    icon: "https://placehold.jp/150x150.png",
    github: "tamemoto",
    twitter: "yusuke_prog_web",
    about: "よろしくね!",
    links: [
        "https://tamblog.net/",
    ],
    skills: [
    ],
    team_id: 2,
    team_icon: "https://placehold.jp/150x150.png"
};
