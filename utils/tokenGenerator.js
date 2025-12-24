import jwt from "jsonwebtoken"

export const jwtToken = (user)=>{
    return jwt.sign({id:user._id, email: user.email, role:user.role}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TOKEN_EXPIRE})
}   