import mongoose, { model, Schema } from "mongoose";
import { Item } from "./item";
import { User } from "./user";

export const CartItemSchema = new Schema({
    item:{
        type: Schema.Types.ObjectId,
        ref: Item
    },

    quantity:{
        type: Number,
        default: 0
    },
    price:{
        type: Number
    }
})

export const CartSchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    cartItems: [CartItemSchema],
    totalPrice:{
        type: Number,
        default: 0.00
    },
    updated:{
        type: Date
    }
})

export const CartItem = model('CartItem', CartItemSchema)
export const Cart = model('Cart', CartSchema)