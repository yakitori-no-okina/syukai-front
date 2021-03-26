// TODO usersが欲しい
export type Recruitment = {
    id: number,
    ownerId: number,
    ownerIcon: string,
    numOfUsers: number,
    numOfExistUsers: number,
    title: string,
    message: string,
    startDate: string,
    endDate: string
};


export type RecruitmentDetail = {
    ownerId: number,
    ownerIcon: string,
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

export const blankRecruitment = [
    {
        id: 1,
        ownerId: 1,
        ownerIcon: "https://placehold.jp/150x150.png",
        numOfUsers: 5,
        numOfExistUsers: 1,
        title: "openHackU",
        message: "バックエンド募集! メンバーが足りません。",
        startDate: "2021-03-20",
        endDate: "2021-03-21"
    }
];

// TODO condition何かきく
export const blankRecruitmentDetail = {
    ownerId: 1,
    ownerIcon: "https://placehold.jp/150x150.png",
    eventName: "openHackU",
    eventUrl: "https://hacku.connpass.com/event/201532/",
    numOfUsers: 1,
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
    startDate: "2021-03-20",
    endDate: "2021-03-20"
};
