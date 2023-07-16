import { Notification } from "../types/Notifcation"

type Action ={
    payload: {
        msg: string,
    } ,
    type: string
}

export let initialNotificationState: never

export const notificationReducer = (notificationState: Notification = {notifications:[], notificationLength:0}, action: Action ) =>{
    switch(action.type){
        case "ADD_NOTIFICATION":
            if(notificationState && notificationState.notifications && notificationState.notifications.length > 0){
                return {notifications: [...notificationState.notifications, action.payload], isLoading:false, notificationLength: notificationState.notificationLength + 1}
            }
            return {notifications: [action.payload], notificationLength: notificationState.notificationLength + 1}
        case "CLEAR_NOTIFICATION":
            notificationState.notifications = []
            notificationState.notificationLength = 0
            console.log("hello")
            return {notifications: [], notificationLength: 0}
        default:
            return {notifications:[], notificationLength: 0}
    }
}