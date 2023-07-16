import express from 'express'
import bodyParser from 'body-parser'
import { dbConnect } from "./db/dbConnect"
import { userRoute } from "./routes/api/userRoutes"
import { config } from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { itemRoute } from './routes/api/itemRoutes'
import path from 'path'
import { cartRoute } from './routes/api/cartRoutes'
import { orderRoute } from './routes/api/orderRoutes'
import { sendMail } from './utils/mailer'
import { contactRoute } from './routes/api/customerContactRoutes'
const { Server } = require('socket.io')
const router = express.Router()
import { Request, Response } from 'express'
import { paymentRoute } from './routes/api/paymentRoutes'
import notificationRoute from './routes/api/notifcationRoutes'


config({ path: __dirname + '/.env' })
export const app = express()
const http = require('http').createServer(app)
dbConnect()
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
  origin: "http://localhost:5173",
  allowedHeaders: "Content-Type",
  credentials: true,
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Content-Type", "application/json")
  next();
});
// parse application/json
app.use((req, res, next) => {
 if (req.originalUrl === '/api/v1/payment/webhook') {
   next(); // Do nothing with the body because I need it in a raw state.
 } else {
   express.json()(req, res, next);  // ONLY do express.json() if the received request is NOT a WebHook from Stripe.
 }
});

app.use('/', userRoute)
app.use('/', itemRoute)
app.use('/', cartRoute)
app.use('/', orderRoute)
app.use("/", contactRoute)
app.use("/", paymentRoute)
app.use("/", notificationRoute)


app.use('/', (express.static(path.join(__dirname, 'public/images'))))
app.use('/checkout', (express.static(path.join(__dirname, '/public/index.html'))))

const portNumber = process.env.PORT_NUMBER
export const server = app.listen(portNumber, () => {
  console.log('listening to port 8080')
})


//configure io
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173'
  }
})
io.on('connection', (socket: any) => {
  console.log('connected to socket')
  socket.on('sendMessage', (data: any) => {
    socket.broadcast.emit('receiveMessage', data)
    console.log(data)
  })
})


