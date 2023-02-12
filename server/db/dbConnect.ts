import mongoose from "mongoose";

export const dbConnect = async() => {
    const connectionString:string = process.env.DB_CONNECTION_STRING!
    mongoose.connect(connectionString, (err:any)=> {
        if (err) { return console.dir(err); }
        console.log("connected")
    });
}

