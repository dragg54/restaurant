import express, { Router } from 'express'
import { deleteNotifications, getNotification, postNotification } from '../../controllers/notificationController'

export const notificationRoute = Router()

notificationRoute.post("/api/v1/notification", postNotification)
notificationRoute.get('/api/v1/notification', getNotification)
notificationRoute.delete('/api/v1/notifications', deleteNotifications)

export default notificationRoute