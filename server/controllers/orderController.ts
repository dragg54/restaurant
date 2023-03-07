import { ItemRequest } from "../types/request";
import { Response } from "express"
import { Order } from "../models/order";
import { OrderStatus } from "../types/orderStatus";
import { IUser } from "../types/user";
import { Cart } from "../models/cart";
import { User } from "../models/user";

const stripe = require('stripe')('sk_test_51MZnT6HXwt4BpIBQC26Z5Z4ujiT51tzc1QZF95eTENcL6MwfwvmCS6X5V1ERNVGzXaYwK409aG0QyCt6FVGOaqt9002ssFDb8A');

const DOMAIN_URL = process.env.DOMAIN_URL
export const postOrder = async (req: ItemRequest, res: Response) => {
    const userId = (req.user as IUser).id
    const userCart = await Cart.findOne({ owner: userId })
    console.log(userCart)
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
                    console.log(userOrder)
                    const data = await Cart.findByIdAndDelete({ owner: userId });
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
