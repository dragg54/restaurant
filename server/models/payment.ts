import mongoose, { model, Schema } from "mongoose";

const PaymentSchema = new Schema({
    userUniqueReferenceNumber:{
        type: mongoose.Types.ObjectId,
    },
    paymentItemUniqueReferenceNumber:{
        type: mongoose.Types.ObjectId
    },
    amount:{
        type: Number
    },
    paymentMethod:{
        type: String,
        default: "Card"
    },
    createdBy:{
        type:String
    },
    createdAt:{
        type: Date
    },
    updatedBy:{
        type:String
    },
    updatedAt:{
        type: Date
    }
})

export const Payment = model("Payment", PaymentSchema)
