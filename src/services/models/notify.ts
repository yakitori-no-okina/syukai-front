export type Notify = {
    id: number,
    userId: number,
    about: string,
    message: string,
    hasRead: boolean,
    approvalWaitId: number | null,
    recruitmentId: number | null,
    dateTime: string,
};

export const blankNotify: Notify[] = [
    {
        id: 1,
        userId: 1,
        about: "aaaaaaaaa",
        message: "aaaaaaaa",
        hasRead: false,
        approvalWaitId: null,
        recruitmentId: 12,
        dateTime: "2020-01-01"
    },
    {
        id: 2,
        userId: 1,
        about: "aaaaaaaaa",
        message: "aaaaaaaa",
        hasRead: true,
        approvalWaitId: null,
        recruitmentId: 12,
        dateTime: "2020-01-01"
    },
    {
        id: 3,
        userId: 1,
        about: "aaaaaaaaa",
        message: "aaaaaaaa",
        hasRead: false,
        approvalWaitId: 12,
        recruitmentId: null,
        dateTime: "2020-01-01"
    }
]
