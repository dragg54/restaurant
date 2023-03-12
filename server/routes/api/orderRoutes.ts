import { Router } from 'express'
import { getAllOrders, postOrder, stripePayment, updateOrderStatus } from '../../controllers/orderController'
import { verify } from '../../middlewares/verify'

export const orderRoute = Router()

orderRoute.post("/api/v1/order/new", verify, postOrder)
orderRoute.post('/charge', verify, stripePayment)
orderRoute.put('/api/v1/order/:id/update', updateOrderStatus)
orderRoute.get('/api/v1/orders', getAllOrders)
