const addToCartModel = require("../../models/cartProduct")

const addToCartViewProduct = async(req,res)=>{
    try{
        const currentUser= req.userId 
        const allProduct= await addToCartModel.find({
            userId : currentUser
        }).populate("productId")

        res.json({
            data : allProduct,
            success : true,
            error : false
        })


    }catch(err){
        res.json({
            nesage : err.message || err,
            success : false,
            error : true
        })
    }
}

module.exports = addToCartViewProduct