import { ItemRequest } from "../types/request";
import {Response} from "express"
import { Order } from "../models/order";
import { OrderStatus } from "../types/orderStatus";
import { IUser } from "../types/user";
import { Cart } from "../models/cart";

export const postOrder = async(req: ItemRequest, res: Response) =>{
    const owner = (req.user as IUser).id 
    const ownerCart = await Cart.findOne({owner})
    if(ownerCart){
        const {cartItems, totalPrice} = ownerCart
        const order = await new Order({
            owner, cartItems, totalPrice, status: OrderStatus.ORDERED
        })
        order.save()
    }
}