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
const { Server } = require('socket.io')


config({ path: __dirname + '/.env' })
export const app = express()
const http = require('http').createServer(app)
dbConnect()
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
  origin: "http://localhost:5175",
  allowedHeaders: "Content-Type",
  credentials: true,
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","http://localhost:5175");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Content-Type", "application/json")
  next();
});
// parse application/json
app.use(bodyParser.json())
// sendFile will go here
app.get('/', function (req, res) {
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
app.use('/', (express.static(path.join(__dirname, 'public/images'))))
const portNumber = process.env.PORT_NUMBER
export const server = app.listen(portNumber, () => {
  console.log('listening to port 8080')
})


//configure io
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
})
io.on('connection', (socket: any) => {
  console.log('connected to socket')
  socket.on('sendMessage', (data: any) => {
    socket.broadcast.emit('receiveMessage', data)
    console.log(data)
  })
})


