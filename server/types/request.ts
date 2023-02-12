import { JwtPayload } from "jsonwebtoken";

export interface UserRequest{
    token?: string | JwtPayload
}