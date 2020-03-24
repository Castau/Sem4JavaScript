function logger(req, res, next){
    console.log(req.host)
    next();
} 
module.exports=logger