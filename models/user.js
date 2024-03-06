var mongoose= require("mongoose");

//Write your schema here with name of schema as userSchema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
       },
       email:{
        type: String,
        required: true
       },
    pswd : {
        type: String,
        required: true
        },
    role : {
        type: String
        }
});

module.exports =mongoose.model("users",userSchema);
