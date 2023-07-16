export type Notification ={
    notifications: [Msg] | [],
    notificationLength: number
}

type Msg = {
    msg: string
}