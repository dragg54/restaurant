import { JwtPayload } from "jsonwebtoken";
import {Request} from 'express'

export interface UserRequest extends Request{
    file: any;
    user?: string | JwtPayload
}

export interface ItemRequest extends Request{
    user?: string | JwtPayload
}