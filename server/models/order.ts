import mongoose, { model, Schema } from "mongoose";
import { OrderStatus } from "../types/orderStatus";
import { CartItemSchema, CartSchema } from "./cart";
import { User } from "./user";
import { CustomerContact, CustomerContactSchema } from "./customerContact";

const OrderSchema = new Schema({
    name: {
        type: String
    },
    cartItems: [Object],
    totalAmount:{
        type: Number
    },
    status:{
        type: String,
        enum: OrderStatus!,
        default: OrderStatus[OrderStatus.PENDING]
    },
    contact:{
        type: CustomerContactSchema
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