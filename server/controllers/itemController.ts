import { UserRequest } from "../types/request"
import { IUser } from "../types/user"
import { isAdmin } from "../utils/helpers"
import { Response } from 'express'
import { Item } from "../models/item"

export const postItem = async (req: UserRequest, res: Response) => {
    if (await isAdmin(req)) {
        const { name, price, quantity, description, category, updateAt, updateBy } = req.body
        const item = new Item({
            name,
            price,
            quantity,
            image: {
                data: req.file.filename,
                contentType: 'image/jpeg'
            },
            description,
            category,
            createdAt: Date.now(),
            createdBy: (req.user as IUser).id,
            updateAt,
            updateBy
        })
        item.save()
            .then((response) => {
                res.status(200).send(item)
            }).catch((err) => {
                res.send(err)
            })
    }
    else {
        res.status(409).send('you are not authorized to make this request')
    }
}

export const findItems = async (req: UserRequest, res: Response) => {
    if (await isAdmin(req)) {
        Item.find()
            .then((items) => {
                res.status(200).send(items)
            }).catch((err)=>{
                res.status(500).send(err)
            })
    }
    else {
        res.status(409).send('you are not authorized to make this request')
    }
}

export const findItem = async(req: UserRequest, res: Response) =>{
    const id = req.params.id
    if(await isAdmin(req) == false && id){
        Item.findById({_id: id})
        .then((item)=>{
            res.status(200).send(item)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    }
    else{
        res.status(409).send('you are not authorized to make this request')
    }
}
