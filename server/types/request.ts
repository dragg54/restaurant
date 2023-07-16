import { JwtPayload } from "jsonwebtoken";
import {Request} from 'express'

export interface UserRequest extends Request{
    file: any;
    user?: string | JwtPayload | RequestUser
}

export interface ItemRequest extends Request{
    user?: string | JwtPayload
}

export interface CategoryRequest extends UserRequest{
    user?: string | JwtPayload
}

export interface RequestUser extends Request{
    user: {
        id: string
    }
}