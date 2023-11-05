const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sushmitha:sushu@cluster0.ok4uph7.mongodb.net/')
.then(()=>
console.log("database is connected"))
.catch((err)=>{
    console.log('Failed to connect')
    console.log(err)
})

const UserSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    isAdmin:{type:Boolean,default:false}
})

const User = mongoose.model("User",UserSchema)
module.exports=User