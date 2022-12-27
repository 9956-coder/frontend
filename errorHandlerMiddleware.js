const CustomAPIError=require("../middleware/custom-error");
const errorHandlerMiddleware=(err,req,res,next)=>{
    // if(err instanceof CustomAPIError){
    //     return res.status(err.statusCode).json({msg:err.message});
    // }
    return res.status(500).json(err.meaage);
    // we can also set some custom middleware error message

    // return res.status(500).json({msg:"somthing went wrong try again later!!"})
}

module.exports=errorHandlerMiddleware;