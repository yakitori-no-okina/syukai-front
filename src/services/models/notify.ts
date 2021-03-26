export type Notify = {
    id: number,
    user_id: number,
    about: string,
    message: string,
    has_read: boolean,
    approval_wait_id: number | null,
    recruitment_id: number | null,
    date_time: string,
};

export const blankNotify: Notify[] = [
    {
        id: 1,
        user_id: 1,
        about: "aaaaaaaaa",
        message: "aaaaaaaa",
        has_read: false,
        approval_wait_id: null,
        recruitment_id: 12,
        date_time: "2020-01-01"
    },
    {
        id: 2,
        user_id: 1,
        about: "aaaaaaaaa",
        message: "aaaaaaaa",
        has_read: true,
        approval_wait_id: null,
        recruitment_id: 12,
        date_time: "2020-01-01"
    },
    {
        id: 3,
        user_id: 1,
        about: "aaaaaaaaa",
        message: "aaaaaaaa",
        has_read: false,
        approval_wait_id: 12,
        recruitment_id: null,
        date_time: "2020-01-01"
    }
]
