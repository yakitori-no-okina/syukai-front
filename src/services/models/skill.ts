export type StringKeyObject = {
    [key: string]: string | number
}

export type Skill = StringKeyObject & {
    icon: string,
    backend: number
    frontend: number,
    management: number,
    mobile: number,
    AI: number,
};
