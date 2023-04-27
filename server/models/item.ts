import mongoose, { model, models, Schema } from "mongoose";
import { User } from "./user";

const ItemSchema = new Schema({
    name:{
        type:String
    },
    price:{
        type: String
    },
    quantity:{
        type: Number
    },
    image:
    {
        data: Buffer,
        contentType: String
    },
    description:{
        type: String
    },
    category: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: User
    },
    updateAt:{
        type: Date,
    },
    updateBy:{
        type: mongoose.Types.ObjectId
    }
})

export const Item = model('Item', ItemSchema)