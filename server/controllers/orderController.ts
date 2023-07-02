import { ItemRequest, UserRequest } from "../types/request";
import { Response, Request } from "express"
import { Order } from "../models/order";
import { OrderStatus } from "../types/orderStatus";
import { IUser } from "../types/user";
import { Cart } from "../models/cart";
import { User } from "../models/user";
import { isAdmin } from "../utils/helpers";
import {sendMail} from '../utils/mailer'

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const DOMAIN_URL = process.env.DOMAIN_URL

export const postOrder = async (req: ItemRequest, res: Response) => {
    const userId = (req.user as IUser).id
    const userCart = await Cart.findOne({ owner: userId })
    try {
        if (userCart) {
            const { cartItems, totalPrice } = userCart
            const order = await new Order({
                orderedBy: userId, cartItems, address: req.body.address, totalPrice, status: OrderStatus.ORDERED
            })
            order.save()
            res.status(201).send(order)
        }
        else {
            res.status(404).send('cart not found')
        }
    }
    catch (err: any) {
        res.status(500).send({ message: err.message })
    }
}

export const updateOrderStatus = async (req: Request, res: Response) => {
    const orderId = req.params.id
    if (orderId && await isAdmin(req as UserRequest) ) {
        try {
            switch (req.body.status.toUpperCase()) {
                case OrderStatus[0]:
                    await Order.findByIdAndUpdate({ _id: orderId }, { status: OrderStatus.ORDERED })
                    return res.status(200).send('order updated to ordered')
                case OrderStatus[1]:
                    await Order.findByIdAndUpdate({ _id: orderId }, { status: OrderStatus.PENDING })
                    return res.status(200).send('order updated to pending')
                case OrderStatus[2]:
                    await Order.findByIdAndUpdate({ _id: orderId }, { status: OrderStatus.ACCEPTED })
                    return res.status(200).send('order updated to accepted')
                case OrderStatus[3]:
                    await Order.findByIdAndUpdate({ _id: orderId }, { status: OrderStatus.CANCELLED })
                    return res.status(200).send('order updated to rejected')
                case OrderStatus[4]:
                    await Order.findByIdAndUpdate({ _id: orderId }, { status: OrderStatus.DELIVERED })
                    return res.status(200).send('order updated to delivered')
                default:
                    return res.status(400).send('bad request')
            }
        }
        catch (e: any) {
            res.status(500).send({ message: e.message })
        }
    }
}

export const stripePayment = async (req: ItemRequest, res: Response) => {
    const userId = (req.user as IUser).id
    const user = await User.findOne({ _id: userId })
    try {
        const userOrder = await Order.findOne({ orderedBy: userId })
        stripe.customers.create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
            name: user?.userName,
            address: {
                city: userOrder?.address,
                country: 'Nigeria',
            }
        })
            .then((customer: any) => {
                return stripe.charges.create({
                    amount: userOrder?.totalPrice! * 100,
                    currency: "usd",
                    customer: customer.id

                }).then(async () => {
                    sendMail(user?.email!)
                    await Cart.findByIdAndDelete({ owner: userId });
                    res.status(201).send(userOrder)
                })

                    .catch((err: string) => {
                        res.send(err)
                    })
            })
    }
    catch (e: any) {
        res.status(500).send({ message: e.message })
    }
}

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.find()
        if (orders) {
            res.status(200).send(orders)
        }
        res.status(404).send('orders not found')
    }
    catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}
