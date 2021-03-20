export type Recruitment = {
    id: number,
    owner_id: number,
    owner_icon: string,
    num_of_users: number,
    num_of_exist_users: number,
    title: string,
    message: string,
    start_date: string,
    end_date: string
};


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
    users: [{
      id: number,
      name: string,
      icon: string
    }],
    title: string,
    message: string,
    purpose: number,
    start_date: string,
    end_date: string
};

export const blankRecruitment = {
    id: 1,
    owner_id: 1,
    owner_icon: "https://placehold.jp/150x150.png",
    num_of_users: 1,
    num_of_exist_users: 1,
    title: "openHackU",
    message: "バックエンド募集! メンバーが足りません。",
    start_date: "2021-03-20",
    end_date: "2021-03-21"
}

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
}
