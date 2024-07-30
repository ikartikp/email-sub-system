const mongoose=require("mongoose");

module.exports=mongoose.connect("mongodb://localhost:27017/subscriber-database")
.then(()=>{
console.log("database connected");
}).catch((error)=>{
    console.log(error.message);
})
