const mongoose= require ('mongoose')

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})
//basically exporting the module without using export keyword and you can actually use the User word directly
mongoose.model("User",userSchema)