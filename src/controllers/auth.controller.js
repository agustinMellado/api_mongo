import User from '../models/User'

export const signup= async(req, res)=>{
    const {username,email,password,roles}=req.body;
    console.log(req.body);
    res.json('signup')
}
export const signin= async(req, res)=>{
    res.json('signin')
}