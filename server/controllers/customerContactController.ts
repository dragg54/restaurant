import { Request, Response } from "express";
import { RequestUser, UserRequest } from "../types/request";
import { CustomerContact } from "../models/customerContact";


export const postCustomerContact = async(req: Request, res: Response) =>{
    const {firstName, lastName, email, phone, country, city, zipCode, state, address} = req.body
    try{
        const customerContact = new CustomerContact({
            userUniqueReferenceNumber: (req as RequestUser).user?.id,
            firstName,
            lastName,
            email,
            phone,
            address,
            zipCode,
            country,
            city,
            state,
            createdAt: Date.now,
            createdBy: (req as RequestUser).user?.id,
            updatedAt: null,
            updatedBy: null
        })
        const existingCustomerContact = await CustomerContact.findOne({userUniqueReferenceNumber: (req as RequestUser).user.id})

        if(existingCustomerContact){
            res.status(409).json({msg: "User contact already exists"})
        }
        customerContact.save().then((data)=>{
            res.status(201).json(customerContact)
        }).catch((err)=>{
            res.sendStatus(500)
        })
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

export const getCustomerContact = async(req: Request, res: Response) =>{
    const userId = req.params.id
    try{
        const customerContact = await CustomerContact.findOne({
            userUniqueReferenceNumber: userId
        })
        res.status(200).json({data: customerContact})
    }
    catch{
        res.sendStatus(500)
    }
}

export const updateUserContact = async(req: Request, res: Response) =>{
    const userUniqueReferenceNumber = (req as RequestUser).user.id
    const {firstName, lastName, email, phone, country, city, zipCode, state, address} = req.body
    try{
        await CustomerContact.findOneAndUpdate({userUniqueReferenceNumber}, {
            firstName,
            lastName,
            email,
            phone,
            country,
            city,
            zipCode,
            state,
            address,
            updatedAt: Date.now(),
            updatedBy: (req as RequestUser).user.id
        }).then((data)=>{
            res.status(200).json({msg: "user contact updated"})
        })
    }
    catch{
        res.sendStatus(500)
    }
}