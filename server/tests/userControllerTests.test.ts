import {app} from '../index'
import { Category } from '../models/category'
import { User } from '../models/user'

const request = require('supertest')
beforeEach(async()=>{
    await User.deleteMany({userName: "test"})
})

test('should add user and return 201 Ok status code', async()=>{
    await request(app).post('/api/v1/user/create')
    .send({
        username: "test",
        email:"test@yahoo.com",
        password: "test",
        firstname:"test",
        lastname: "test"
    })
    .expect(201)
})

   
