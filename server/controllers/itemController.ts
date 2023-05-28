import { ItemRequest, UserRequest } from "../types/request"
import { IUser } from "../types/user"
import { isAdmin } from "../utils/helpers"
import { Response } from 'express'
import { Item } from "../models/item"
import { Category } from "../models/category"
import { CartItemSchema } from "../models/cart"
import fs from 'fs'
import path from 'path'

export const postItem = async (req: UserRequest, res: Response) => {
    if (await isAdmin(req)) {
        const { name, price, quantity, description, category, updateAt,  updateBy } = req.body
        // amirali-mirhashemian-jh5XyK4Rr3Y-unsplash.jpg
        const item = new Item({
            name,
            price,
            quantity,
            image:{
                data: fs.readFileSync(path.join(__dirname, "../public/images/" + req?.file?.filename)),
                contentType: 'image/png'
            },
            description,
            category,
            createdAt: Date.now(),
            // createdBy: (req.user as IUser).id,
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
    // else {
    //     res.status(409).send('you are not authorized to make this request')
    // }
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
    if(await isAdmin(req) == true && id){
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

export const findItemByCategory = async(req: ItemRequest, res: Response) =>{
    const category = req.params.category
    if(category){
       try{
        const items = await Item.find({category})
        if(items){
            res.status(201).send(items)
        }
        else{
            res.status(404).send('not found')
        }
       }
       catch(error: any){
        res.status(500).send({message: error.message})
       }
    }
    
}

export const findItemByName = async(req: ItemRequest, res: Response) =>{
    const name = req.params.name
    if(name){
       try{
        const items = await Item.find({name})
        if(items){
            res.status(201).send(items)
        }
        else{
            res.status(404).send('not found')
        }
       }
       catch(error: any){
        res.status(500).send({message: error.message})
       }
    }
    
}


export const deleteItem = async(req: UserRequest, res: Response) =>{
    const id = req.params.id
    if(await isAdmin(req) == true && id){
        Item.findByIdAndDelete({_id: id})
        .then((item)=>{
            res.status(200)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    }
    else{
        res.status(409).send('you are not authorized to make this request')
    }
}

export const updateItem = async(req: UserRequest, res: Response) =>{
    const id = req.params.id
    const { name, price, quantity, description, category} = req.body
    if(await isAdmin(req) == true && id){
        Item.findByIdAndUpdate({_id: id}, {
            name,
            price,
            quantity,
            description,
            category,
            updatedBy: (req.user as IUser).id,
            updatedAt: Date.now(),

        })
        .then((item)=>{
            res.sendStatus(200)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    }
    else{
        res.status(409).send('you are not authorized to make this request')
    }
}