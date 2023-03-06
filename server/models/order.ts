import mongoose, { model, Schema } from "mongoose";
import { OrderStatus } from "../types/orderStatus";
import { CartItemSchema, CartSchema } from "./cart";
import { User } from "./user";

const OrderSchema = new Schema({
    cartItems: [CartItemSchema],
    totalPrice:{
        type: Number
    },
    status:{
        type: String,
        enum: OrderStatus,
        default: null
    },
    address: {
        type: String
    },
    orderedBy: {
        type: mongoose.Types.ObjectId,
        ref: User
    },
    orderedAt:{
        type: Date
    }
})

export const Order = model('Order', OrderSchema)