const jwt = require('jsonwebtoken')

async function authToken(req,res,next){ //because this a middleware, jence it'll go to next control
    try{
        const token = req.cookies?.token 

        console.log("token",token)

        if(!token){
            return res.status(200).json({
                message : "User is not logged in",
                error : true,
                success : false
            })
        }
        // verify a token symmetric
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            console.log(err)
            console.log("decoded",decoded)

            if(err){
                console.log("error auth",err)
            }

            req.userId = decoded?._id

            next()
        });


    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = authToken