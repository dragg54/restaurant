import {Router} from 'express'
import { postItem } from '../../controllers/itemController'
import {addAdmin, login, postUser, removeAdmin} from '../../controllers/userController'
import {verify} from '../../middlewares/verify'


export const userRoute = Router()

userRoute.post('/api/v1/user/create', postUser)
userRoute.post('/api/v1/auth/login', login)
userRoute.patch('/api/v1/admin/add', addAdmin)
userRoute.patch('/api/v1/admin/remove', removeAdmin)

