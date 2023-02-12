import express from 'express'
import bodyParser from 'body-parser'
import { dbConnect} from "./db/dbConnect"
import { userRoute } from "./routes/api/userRoutes"
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

config({path: __dirname + '/.env'})
const app = express()
dbConnect() 
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use('/', userRoute)
app.listen("8080", ()=>{
    console.log('listening to port 8000')
})

