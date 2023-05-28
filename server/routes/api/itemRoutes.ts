import { verify } from "../../middlewares/verify"
import { findItem, findItemByCategory, findItemByName, findItems, postItem, updateItem } from "../../controllers/itemController"
export const itemRoute = require('express').Router()
const multer  = require('multer')
const SharpMulter = require('sharp-multer')
const storage = SharpMulter({
    destination: (req:any, file:any, cb:any) => 
        cb(null, 'public/images'),
        imageOptions:{
            fileFormat: "jpg",
            quality: 80,
            resize: { width: 500, height: 500 },
              }
    ,
    filename: (req:any, file:any, cb:any) => {
        cb(null, file.originalname)
    }
});
const upload = multer({storage, limits: { fieldSize: 10 * 1024 * 1024 }})

itemRoute.post('/api/v1/item/create',verify, upload.single('image'),  postItem)
itemRoute.get('/api/v1/items', verify, findItems)
itemRoute.get('/api/v1/item/:id', verify, findItem)
itemRoute.get('/api/v1/items/:category', findItemByCategory)
itemRoute.get('/api/v1/items/:name', findItemByName)
itemRoute.put('/api/v1/item/:id', verify,upload.single('image'), updateItem)