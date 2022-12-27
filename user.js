const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is manadtory for signup']
    },
    password:{
        type:String,
        required:[true,'password is manadtory for signup'],
        unique:true
    }
})


module.exports=mongoose.model("User",userSchema);