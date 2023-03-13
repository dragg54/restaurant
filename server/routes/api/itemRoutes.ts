import { verify } from "../../middlewares/verify"
import { findItem, findItemByCategory, findItemByName, findItems, postItem } from "../../controllers/itemController"

export const itemRoute = require('express').Router()
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req:any, file:any, cb:any) => {
        cb(null, 'public/images')
    },
    filename: (req:any, file:any, cb:any) => {
        cb(null, file.originalname)
    }
});
const upload = multer({storage})

itemRoute.post('/api/v1/item/create', upload.single('image'), verify, postItem)
itemRoute.get('/api/v1/items', verify, findItems)
itemRoute.get('/api/v1/item/:id', verify, findItem)
itemRoute.get('/api/v1/items/:category', findItemByCategory)
itemRoute.get('/api/v1/items/:name', findItemByName)