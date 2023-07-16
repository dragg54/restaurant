import mongoose, { model, Schema } from "mongoose";

const NotificationSchema = new Schema(
    {
        message:{
            type: String
        },
        createdAt:{
            type: Date
        }
    })

export const Notification = model('notification', NotificationSchema)