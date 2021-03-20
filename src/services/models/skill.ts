type Language = {
    value: number,
    detail: {
        name: string,
        value: number,
    }[]
};

export type Skill = {
    backend: Language
    frontend: Language,
    management: Language,
    mobile: Language,
    AI: Language,
};
