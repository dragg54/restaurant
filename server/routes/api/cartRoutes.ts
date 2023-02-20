import { Router } from 'express'
import {  getCartItems, addCartItem, updateCartItemQuantity, deleteCartItem } from '../../controllers/cartController'
import { verify } from '../../middlewares/verify'

export const cartRoute = Router()

cartRoute.post("/api/v1/cart/item/add", verify, addCartItem)
cartRoute.delete("/api/v1/cart/item/:id/delete", verify, deleteCartItem)
cartRoute.get("/api/v1/cart/items", verify, getCartItems)
cartRoute.put("/api/v1/cart/item/update", verify, updateCartItemQuantity)