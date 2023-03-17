const request = require('supertest')
import { app } from '../index'
import { Category } from '../models/category'
import { Item } from '../models/item'

interface ICategory {
    _id?: String,
    name: String,

}

const newCategory: ICategory = {
    name: "Test"
}
beforeEach(async () => {
    await new Category({
        name: "Test"
    }).save()
})

test('should create item and return 201 Created', async () => {
    const category: unknown = await Category.findOne({ name: "Test" })
    const response = await request(app).post('/api/v1/auth/login').send({
        username: "ajibola",
        password: "ajibola",
        email: "ajibola@yahoo.com"
    })
    await request(app).get('/api/v1/items')
        .set('Cookie', [`auth=${response.text}`])
        .expect(200)
})

