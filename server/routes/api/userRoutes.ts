import {Router} from 'express'
import {login, postUser} from '../../controllers/userController'
import {verify} from '../../middlewares/verify'


export const userRoute = Router()

userRoute.post('/api/v1/user/create', postUser)
userRoute.post('/api/v1/auth/login', login)