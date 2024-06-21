const SearchProduct =async(req,res)=>{
    try{
       const query =req.query.q
       console.log(query)
    }catch(err){
        res.json({
            message: err.message || err,
            error:true,
            success:false
        })
    }
}
module.exports = SearchProduct