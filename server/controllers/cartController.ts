import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { Cart, CartItem } from '../models/cart'
import { Item } from '../models/item'
import { ItemRequest } from '../types/request'
import { IUser } from '../types/user'

export const addCartItem = async (req: ItemRequest, res: Response) => {
    const { item, quantity } = req.body
    const user = (req.user as IUser).id!
    try {
        const cart = await Cart.findOne({ owner: user })
        const cartItem = await Item.findOne({ _id: item })
        if (cart != null) {
            const price = +cartItem?.price!
            cart.cartItems.push({ item, quantity, price })
            const totalCartItemPrice: number = cart.totalPrice + (price * quantity)
            cart.totalPrice = +(totalCartItemPrice.toFixed(2))
            cart.save()
            res.status(200).send(cart)
        }
        else {
            const cart = new Cart({
                owner: user,
                cartItems: [{
                    item,
                    quantity,
                    price: cartItem?.price
                }]
            })
            const totalCartItemPrice: number = cart.totalPrice + (+(cartItem?.price!) * quantity)
            cart.totalPrice = +totalCartItemPrice.toFixed(2)
            cart.save()
            res.status(200).send(cart)
        }

    }
    catch (err) {
        res.status(500).send(err)
    }
}


export const deleteCartItem = async (req: ItemRequest, res: Response) => {
    const id = req.params.id
    const userId = (req.user as IUser).id
    const cart = await Cart.findOne({ owner: userId })
    try {
        if (cart) {
            const cartItems = cart?.cartItems!
            const item = cartItems.find(p => p.id.toString() == id)
            const itemIndex = cartItems.findIndex(p => p._id?.toString() == id)
            cartItems.splice(itemIndex, itemIndex + 1)
            const newCartItemTotalPrice = cart.totalPrice - (item?.price! * item?.quantity!)
            cart.totalPrice = newCartItemTotalPrice
            cart.save()
            res.status(200).json({
                message: `cart item with id ${id} has been deleted`
            })
        }
    }
    catch (err) {
        res.sendStatus(500)
    }
}

export const getCartItems = async (req: ItemRequest, res: Response) => {
    const userId = (req.user as IUser).id
    const cart = await Cart.find({ owner: userId })
    try {
        if (cart) {
            res.status(200).json({ data: cart })
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
}

export const updateCartItemQuantity = async (req: ItemRequest, res: Response) => {
    const owner = (req.user as IUser).id
    const cart = await Cart.findOne({ owner })
    try {
        if (cart) {
            const cartItem = cart.cartItems.find(p => p._id == (req.body.item as unknown))
            if (cartItem) {
                const prevItemPrice = cartItem.price! * cartItem.quantity
                const updatedPrice: number = cartItem?.price! * req.body.quantity
                cartItem.quantity = req.body.quantity
                const cartItemIndex = cart.cartItems.indexOf(cartItem)
                cart.cartItems[cartItemIndex] = cartItem
                cart.totalPrice = (cart.totalPrice - prevItemPrice) + updatedPrice
                cart.save()
                return res.sendStatus(200)
            }
            else{
                res.status(404).json({
                    error: 'cart item not found'
                })
            }
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
}
