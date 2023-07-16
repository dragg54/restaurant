import { Router } from 'express'
import { getCustomerContact, postCustomerContact, updateUserContact } from '../../controllers/customerContactController'
import { verify } from '../../middlewares/verify'

export const contactRoute = Router()

contactRoute.post("/api/v1/user/:id/contact", verify, postCustomerContact)
contactRoute.get("/api/v1/user/:id/contact", verify, getCustomerContact)
contactRoute.put("/api/v1/user/:id/contact",verify, updateUserContact)
