import React, { createContext, useReducer, useState } from "react";
import { initialNotificationState, notificationReducer } from "../reducers/NotificationReducer";
import { Notification } from "../types/Notifcation";

export const NotificationContext = createContext<{notification:Notification, dispatchNotificationAction:React.Dispatch<any>, isLoading: boolean} | null>(null)
const NotificationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [notification, dispatchNotificationAction] = useReducer(notificationReducer, initialNotificationState)

    return (
        <NotificationContext.Provider value={{ notification, dispatchNotificationAction, isLoading: true }}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContextProvider