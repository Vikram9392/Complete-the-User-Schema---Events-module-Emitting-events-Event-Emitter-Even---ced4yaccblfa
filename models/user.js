var mongoose= require("mongoose");

//Write your schema here with name of schema as userSchema
const  userSchema=mongoose.schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pswd:{
        type:String,
        required:true
    },
    name:{
        type:String,
        enum:["buyer","seller"]
    }
})

module.exports =mongoose.model("users",userSchema);