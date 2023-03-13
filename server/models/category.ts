import mongoose, { model, Schema } from "mongoose";

const CategorySchema = new Schema(
    {
        name:{
            type: String
        }
    })

export const Category = model('category', CategorySchema)