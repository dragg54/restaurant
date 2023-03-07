import express from 'express'
import bodyParser from 'body-parser'
import { dbConnect} from "./db/dbConnect"
import { userRoute } from "./routes/api/userRoutes"
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { itemRoute } from './routes/api/itemRoutes'
import path from 'path'
import { cartRoute } from './routes/api/cartRoutes'
import { orderRoute } from './routes/api/orderRoutes'

config({path: __dirname + '/.env'})
const app = express()
dbConnect() 
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// parse application/json
app.use(bodyParser.json())
// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });
 /*  app.post('/create-checkout-session', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/success.html'));
  }); */
  
 
app.use('/', userRoute)
app.use('/', itemRoute)
app.use('/', cartRoute)
app.use('/', orderRoute)
app.use(express.static('public'));
app.use('/static', (express.static(path.join(__dirname, 'public/images'))))
const portNumber = process.env.PORT_NUMBER
app.listen(portNumber, ()=>{
    console.log('listening to port 8080')
})

