const mongoose=require("mongoose")
const subscriberSchema=new mongoose.Schema({
    username:String,
    email:String
})
const subscribermModel=mongoose.model("subscriber",subscriberSchema)
module.exports=subscribermModel