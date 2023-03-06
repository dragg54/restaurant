import { ItemRequest } from "../types/request";
import {Response} from "express"
import { Order } from "../models/order";
import { OrderStatus } from "../types/orderStatus";
import { IUser } from "../types/user";
import { Cart } from "../models/cart";
const stripe = require('stripe')('sk_test_51MZnT6HXwt4BpIBQC26Z5Z4ujiT51tzc1QZF95eTENcL6MwfwvmCS6X5V1ERNVGzXaYwK409aG0QyCt6FVGOaqt9002ssFDb8A');

const DOMAIN_URL = process.env.DOMAIN_URL
export const postOrder = async(req: ItemRequest, res: Response) =>{
    const owner = (req.user as IUser).id 
    const ownerCart = await Cart.findOne({owner})
    if(ownerCart){
        const {cartItems, totalPrice} = ownerCart
        const order = await new Order({
            owner, cartItems, address: req.body.address, totalPrice, status: OrderStatus.ORDERED
        })
        order.save()
        res.status(201).send(order)
    }
}

export const stripePayment = async(req:ItemRequest, res: Response) =>{
    const{product, token} = req.body
    console.log(req.body.stripeToken)
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'Gourav Hammad',
        address: {
            line1: 'TC 9/4 Old MES colony',
            postal_code: '452331',
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'India',
        }
    })
    .then((customer:any) => {
        console.log(customer)
     return stripe.charges.create({
        amount: req.body.amount * 100,
        currency: "usd",
        customer: customer.id

      }).then(()=> res.send('success'))
      .catch((err: string)=>{
        res.send(err)
      })
	})}
