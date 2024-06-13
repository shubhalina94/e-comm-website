// const jwt = require('jsonwebtoken')

// async function authToken(req,res,next){ //because this a middleware, jence it'll go to next control
//     try{
//         const token = req.cookies?.token 

//         console.log("token",token)

//         if(!token){
//             return res.status(200).json({
//                 message : "User is not logged in",
//                 error : true,
//                 success : false
//             })
//         }
//         // verify a token symmetric
//         jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
//             console.log(err)
//             console.log("decoded",decoded)

//             if(err){
//                 console.log("error auth",err)
//             }

//             req.userId = decoded?._id

//             next();
//         });


//     }catch(err){
//         res.status(400).json({
//             message : err.message || err,
//             error : true,
//             success : false
//         });
//     }
// }

// module.exports = authToken

const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        // Retrieve the token from cookies or headers (if needed)
        const token = req.cookies?.token;

        console.log("token", token);

        if (!token) {
            return res.status(401).json({  // Changed to 401 Unauthorized
                message: "User is not logged in",
                error: true,
                success: false
            });
        }

        // Verify the token
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log("error auth", err);
                return res.status(401).json({  // Changed to 401 Unauthorized
                    message: "Invalid token",
                    error: true,
                    success: false
                });
            }

            console.log("decoded", decoded);

            // Store the user ID in the request object
            req.userId = decoded?._id;

            // Proceed to the next middleware or route handler
            next();
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = authToken;
