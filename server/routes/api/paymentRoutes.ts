import express, { Router } from 'express'
import { paymentWebHook, postPayment } from '../../controllers/paymentController'

export const paymentRoute = Router()

paymentRoute.post("/api/v1/payment/webhook", express.raw({type: 'application/json'}), paymentWebHook)
paymentRoute.post('/create-checkout-session', postPayment)