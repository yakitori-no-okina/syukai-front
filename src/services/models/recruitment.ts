export type Recruitment = {
    id: number,
    icon: string,
    num_of_users: number,
    title: string,
    users: {id: number, name: string, icon: string}[]
    start_date: string,
    end_date: string
};

export const blankRecruitment: Recruitment[] = [
    {
        id: 1,
        icon: "https://placehold.jp/150x150.png",
        num_of_users: 5,
        users: [
            {
                id: 0,
                name: "string",
                icon: "string"
            }
        ],
        title: "バックエンド募集! メンバーが足りません。",
        start_date: "2021-03-20",
        end_date: "2021-03-21"
    }
];

export type RecruitmentDetail = {
    owner_id: number,
    owner_icon: string,
    event_name: string,
    event_url: string,
    num_of_users: number,
    conditions: {
      backend: number,
      frontend: number,
      management: number,
      mobile: number,
    },
    users: {
        id: number,
        name: string,
        icon: string
    }[],
    title: string,
    message: string,
    purpose: number | undefined,
    start_date: string,
    end_date: string
};


// TODO condition何かきく
export const blankRecruitmentDetail = {
    owner_id: 1,
    owner_icon: "https://placehold.jp/150x150.png",
    event_name: "openHackU",
    event_url: "https://hacku.connpass.com/event/201532/",
    num_of_users: 1,
    conditions: {
        backend: 0,
        frontend: 1,
        management: 0,
        mobile: 0,
    },
    users: [{
        id: 1,
        name: "tame",
        icon: "https://placehold.jp/150x150.png"
    }],
    title: "openHackU",
    message: "バックエンド募集! メンバーが足りません。",
    purpose: 0,
    start_date: "2021-03-20",
    end_date: "2021-03-20"
};

export type createForm = {
    icon?: string | undefined,
    purpose: number,
    message: string | undefined,
    event_link: string | undefined,
    event_name: string | undefined
    start_date: string | undefined,
    end_date: string | undefined,
    conditions: {
        backend: number,
        frontend: number,
        mobile: number,
        AI: number
    },
    num_of_users: number,
}

export const blackForm: createForm = {
    icon: "https://placehold.jp/150x150.png",
    purpose: 0,
    message: undefined,
    event_link: undefined,
    event_name: undefined,
    start_date: undefined,
    end_date: undefined,
    conditions: {
        backend: 0,
        frontend: 0,
        mobile: 0,
        AI: 0
    },
    num_of_users: 0
}
