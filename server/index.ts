import express from 'express'
import bodyParser from 'body-parser'
import { dbConnect} from "./db/dbConnect"
import { userRoute } from "./routes/api/userRoutes"
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { itemRoute } from './routes/api/itemRoutes'
import path from 'path'

config({path: __dirname + '/.env'})
const app = express()
dbConnect() 
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use('/', userRoute)
app.use('/', itemRoute)
app.use('/static', (express.static(path.join(__dirname, 'public/images'))))
app.listen("8080", ()=>{
    console.log('listening to port 8080')
})

