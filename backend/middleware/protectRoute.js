import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const proectRoute = async(req,res,next)=>{
    try {
        
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"unaurhorized -no token found"});
        }
        const decoded= jwt.verify(token, process.env.JWT_KEY);
        if(!decoded){
            return res.status(401).json({error:"unaurtorized - invalid token"});

        }
        const user =await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({error:"user not found"});
        }
        req.user= user;
        
        next();
    } catch (error) {
       console.log("error in protectRoute middleware:",error.message);
       res.status(500).json({error:"internal server error"}); 
    }
}
export default proectRoute;