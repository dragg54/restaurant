import {app} from '../index'

const request = require('supertest')

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