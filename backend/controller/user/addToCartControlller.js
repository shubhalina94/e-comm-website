const addToCartController =(req,res)=>{
    try{
     const{productId} =req?.body
    }catch(err){
        res.json({
            message : err?.message || err,
            error :true,
            success:false
        })
    }
}