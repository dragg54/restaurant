import { Response, Request } from 'express'
import { User } from '../models/user'
import { IUser } from '../types/user'
import { checkEmailDuplicate, findUserByEmail, hashPassword, unhashPassword } from '../utils/helpers'
import jwt from 'jsonwebtoken'

export const postUser = (req: Request, res: Response) => {
    let { username, email, password, firstname, lastname } = req.body
    checkEmailDuplicate(email)
        .then(() => {
            hashPassword(password).then((hash) => {
                password = hash
                let user = new User({
                    userName: username,
                    email: email,
                    password: password,
                    firstName: firstname,
                    lastName: lastname
                })
                user.save()
                    .then((user: IUser) => {
                        res.status(201).send(user)
                    }).catch((err: string) => {
                        console.log(err)
                        res.status(500).send(err)
                    })
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            res.status(409).send(err)
        })
}

export const login = (req: Request, res: Response) => {
    const { email, password } = req.body
    unhashPassword(email, password).then((id) => {
        const jwtSecretKey = process.env.SECRET_KEY!
        const token = jwt.sign({ id }, jwtSecretKey);
        res.cookie('auth', jwtSecretKey, { maxAge: 3600000, httpOnly: true, })
        res.send(token);
    }).catch((err) => {
        console.log(err)
    })
}

export const addAdmin = (req: Request, res: Response) => {
    const userEmail = req.body.email
    User.findOneAndUpdate({ email: userEmail }, { isAdmin: true })
        .then((user) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.sendStatus(500)
        })
}

export const removeAdmin = (req: Request, res: Response) => {
    const userEmail = req.body.email
    User.findOneAndUpdate({ email: userEmail }, { isAdmin: false })
        .then((user) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.sendStatus(500)
        })
}