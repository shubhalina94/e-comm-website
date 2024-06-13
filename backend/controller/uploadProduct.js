const productModel = require("../models/productModel")

async function UploadProductController(req,res){
    try{
        const uploadProduct =new productModel(req.body)
        const saveProduct = await uploadProduct.save()

        res.status(201).json({
            message : "Product uploaded successfully",
            error : false,
            success : true,
            data : saveProduct
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

    
}
module.exports = UploadProductController