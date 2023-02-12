import { Response, Request, NextFunction } from "express";
import jwt, { Jwt, JwtPayload, VerifyErrors, VerifyOptions } from "jsonwebtoken"
import { UserRequest } from "../types/request";

export function verify(req: Request, res: Response, next: NextFunction){
  const token = req.cookies.auth
  console.log({token: token})
  if (token !== undefined) {
    const secret: string = process.env.SECRET_KEY!
    const decoded = jwt.verify(token, secret)
    console.log({token: token, decoded: decoded})
     if(decoded){
        (req as UserRequest).token = decoded
     }
      next();;
  } else {
    res.status(403).send("you are not logged in")
  }
}