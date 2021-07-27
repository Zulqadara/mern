const jwt = require('jsonwebtoken')

exports.requireSignIn = (req, res, next) =>{

    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1]
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        // next() means this method will execute first then the 'profile' function will be called in controller
        
    }else{
        return res.status(400).json({
            message: 'Authorization Required'
        })
    }

    next(); 
}

exports.adminMiddleware = (req, res, next)=>{
    if(req.user.role !== 'admin') {
        return res.status(400).json({
            message: "Admin Access Denied!"
        })
    }
    next();   
}

exports.userMiddleware = (req, res, next)=>{
    if(req.user.role !== 'user') {
        return res.status(400).json({
            message: "User Access Denied!"
        })
    }
    next();   
}

