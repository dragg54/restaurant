import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
    name:{
        type:String
    },
    price:{
        type: String
    },
    quantity:{
        type: String
    },
    image: {
        source:Buffer,
        filename: String,
        minetype: String
    },
    category: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    createdBy:{
        type: mongoose.Types.ObjectId
    },
    updateAt:{
        type: Date,
    },
    updateBy:{
        type: mongoose.Types.ObjectId
    }
})