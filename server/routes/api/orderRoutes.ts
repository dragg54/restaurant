import { Router } from 'express'
import { postOrder, stripePayment } from '../../controllers/orderController'
import { verify } from '../../middlewares/verify'

export const orderRoute = Router()

orderRoute.post("/api/v1/order/new", verify, postOrder)
orderRoute.post('/charge', verify, stripePayment)
