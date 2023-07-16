import { Request, Response } from 'express'
import { Payment } from '../models/payment';
import { sendMail } from '../utils/mailer';
import { Cart } from '../models/cart';
import { Order } from '../models/order';
import { User } from '../models/user';
import { IUser } from '../types/user';
import { ItemRequest, RequestUser } from '../types/request';
import { CartItem } from '../types/cartItem';
import { Item } from '../types/item';
import { Notification } from '../models/notification';
import {io} from "socket.io-client"
const stripe = require('stripe')('sk_test_51MZnT6HXwt4BpIBQC26Z5Z4ujiT51tzc1QZF95eTENcL6MwfwvmCS6X5V1ERNVGzXaYwK409aG0QyCt6FVGOaqt9002ssFDb8A');
const endpointSecret = "whsec_1b94fd11575653244748ac613d98c47814962ab2d69424f4f0eff6d1a47eb51a";
const DOMAIN_URL = process.env.DOMAIN_URL

// export const stripePayment = async (req: ItemRequest, res: Response) => {
//   const userId = (req.user as IUser).id
//   const user = await User.findOne({ _id: userId })
//   try {
//     const userOrder = await Order.findOne({ orderedBy: userId })
//     stripe.customers.create({
//       email: req.body.stripeEmail,
//       source: req.body.stripeToken,
//       name: userOrder?.contact?.firstName + "" + userOrder?.contact?.lastName,
//       phone: userOrder?.contact?.phone,
//       address: {
//         city: userOrder?.contact?.city,
//         state: userOrder?.contact?.state,
//         postal_code: userOrder?.contact?.postalCode,
//         country: userOrder?.contact?.country,
//       }
//     })
//       .then((customer: any) => {
//         return stripe.charges.create({
//           amount: userOrder?.totalPrice! * 100,
//           currency: "usd",
//           customer: customer.id

//         }).then(async () => {
//           sendMail(req.body.stripeEmail)
//           await Cart.findByIdAndDelete({ owner: userId });
//           res.status(201).send(userOrder)
//         })
//           .catch((err: string) => {
//             res.send(err)
//           })
//       })
//   }
//   catch (e: any) {
//     res.status(500).send({ message: e.message })
//   }
// }
type IO ={
  connect: () => void
}
export const postPayment = async (req: Request, res: Response) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(req.body.cartItems),
    },
  });

  const line_items = req.body.cartItems?.map((item: Item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          description: item.description,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: Math.floor(item.price) * 100,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "KE"],
    },

    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "usd",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items: line_items,
    mode: "payment",
    customer: customer.id,
    success_url: `http://localhost:5173/success`,
    cancel_url: `http://localhost:5173/checkout`,
  });

  // res.redirect(303, session.url);
  res.send({ url: session.url });
}


export const paymentWebHook = ((request: Request, response: Response) => {
  const sig = request.headers['stripe-signature'];
  let event;

  //CLI to listen to webhook events
  //stripe listen --forward-to localhost:8080/api/v1/payment/webhook
  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err: any) {
    console.log(err)
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }



  // Handle the event
  switch (event.type) {
    case `checkout.session.completed`:
      const paymentIntentSucceeded = event.data.object;
      const customer = stripe.customers
        .retrieve(paymentIntentSucceeded.customer)
        .then(async (customer: any) => {
          try {
            // CREATE ORDER
            const order = new Order({
              name: paymentIntentSucceeded.customer_details.name,
              contact: {
                address: paymentIntentSucceeded.customer_details.address,
                name: paymentIntentSucceeded.customer_details.name,
                email: paymentIntentSucceeded.customer_details.email,
                phone: paymentIntentSucceeded.customer_details.phone,
                item: paymentIntentSucceeded.invoice_creation.invoice_data,
              },
              totalAmount: paymentIntentSucceeded.amount_subtotal / 100,
              cartItems: customer.metadata.cart,
              orderedAt: Date.now()
            })
            order.save()

            //CREATE NOTIFICATION
            const notification = new Notification({
              message: "A new order has been receieved",
              createdAt: Date.now()
            })
            notification.save()
          } catch (err) {
            console.log(err)
          }
        })

     
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});