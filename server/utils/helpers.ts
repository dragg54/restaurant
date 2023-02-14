import bcrypt from 'bcrypt'
import { ObjectId } from 'mongoose'
import { User } from '../models/user'
import { UserRequest } from '../types/request'
import { IUser } from '../types/user'

export function hashPassword(password: string) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) reject(err)
                resolve(hash)
            })
        })
    })
}

//check if email already exists
export function checkEmailDuplicate(email: string) {
    return new Promise((resolve, reject) => {
        User.find({ email })
            .then((data) => {
                if (data.length > 0) reject('user already exists')
                else resolve("")
            })
    })
}

export function findUserByEmail(email: string) {
    return new Promise((resolve, reject) => {
        User.find({ email })
            .then((data) => {
                if (data.length > 0) resolve(data)
                else reject("user does not exist")
            })
    })
}

export function unhashPassword(email: string, password: string) {
    return new Promise((resolve, reject) => {
        findUserByEmail(email).then((data: any) => {
            data.map((user: IUser) => bcrypt.compare(password, user.password, (err, isMatch) => {
                if (!err) resolve(user.id)
                else reject(err)
            }))
        })
    })
}

export function isAdmin(req: UserRequest):Promise<boolean>{
    const userId = (req.user as IUser)?.id
    return User.findOne({id: userId})
    .then((user)=>{
        if((user as IUser).isAdmin){
            return true
        }
        return false
    }).catch((err)=>{
        return err
    })
}