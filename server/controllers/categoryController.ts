import { Request, Response } from 'express'
import { Category } from '../models/category'
import { CategoryRequest } from '../types/request'
import { isAdmin } from '../utils/helpers'


export const postCategory = async (req: CategoryRequest, res: Response) => {
    if (await isAdmin(req)) {
        const { name } = req.body
        const category = new Category({
            name,
        })
        category.save()
            .then((response) => {
                res.status(201).send(category)
            }).catch((err) => {
                res.send(err)
            })
    }
    else {
        res.status(409).send('you are not authorized to make this request')
    }
}

export const findAllCategories = async (req: CategoryRequest, res: Response) => {
    if (await isAdmin(req)) {
        Category.find()
            .then((category) => {
                res.status(200).send(category)
            }).catch((err)=>{
                res.status(500).send(err)
            })
    }
    else {
        res.status(409).send('you are not authorized to make this request')
    }
}

export const findCategory = async(req: CategoryRequest, res: Response) =>{
    const id = req.params.id
    if(await isAdmin(req) == false && id){
        Category.findById({_id: id})
        .then((category)=>{
            res.status(200).send(category)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
    }
    else{
        res.status(409).send('you are not authorized to make this request')
    }
}


export const deleteCategory = async(req: CategoryRequest, res: Response) =>{
    const id = req.params.id
    if(await isAdmin(req) == false && id){
        Category.findByIdAndDelete({_id: id})
        .then((category)=>{
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

export const getCategoryByCategory = async(req: CategoryRequest, res: Response) =>{
    const category = req.params.category
    if(await isAdmin(req as CategoryRequest)){
        try{
            const category = await Category.find({name})
            if(category){
                res.status(200).send(category)
            }
            else{
                res.status(404).send('no Categorys found')
            }
        }
        catch(err){
            res.sendStatus(500)
        }
    }
    else{
        res.status(403).send('you are not authorized to make this request')
    }
    
}

export const updateCategory = async(req: CategoryRequest, res: Response) =>{
    const id = req.params.id
    const { name} = req.body
    if(await isAdmin(req) == false && id){
        Category.findByIdAndUpdate({_id: id}, {
            name
        })
        .then((category)=>{
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