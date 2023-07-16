import mongoose, {model, Schema} from "mongoose";
import { User } from "./user";

export const CustomerContactSchema = new Schema({
    userUniqueReferenceNumber:{
        type:  mongoose.Types.ObjectId,
        ref: User
    },
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type:String,
        require: true
    },
    address:{
        type: Object,
        require: true
    },
    state:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    postalCode:{
        type: String
    },
    country:{
        type: String,
        require: true
    },
    zipCode:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date
    },
    createdBy:{
        type:  mongoose.Types.ObjectId,
        ref: User
    },
    updatedAt:{
        type: Date
    },
    updatedBy:{
        type:  mongoose.Types.ObjectId,
        require: false
    }
})

export const CustomerContact = model("customerContact", CustomerContactSchema)