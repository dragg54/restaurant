import { Response, Request} from "express"
import { Notification } from "../models/notification"

export const postNotification = (req: Request, res: Response) =>{
    const notification = new Notification({
        message: req.body.msg,
        createdAt: Date.now()
    })
    notification.save()
    res.sendStatus(200)
}

export const getNotification = async(req:Request, res: Response) =>{
    try{
        const notifications = await Notification.find()
        res.status(200).send(notifications) 
    }
    catch{
        res.sendStatus(500)
    }
}

export const deleteNotifications = async(req:Request, res: Response) =>{
    try{
        await Notification.deleteMany({})
        res.sendStatus(200)
    }
    catch(err){
        res.sendStatus(500)
    }
}