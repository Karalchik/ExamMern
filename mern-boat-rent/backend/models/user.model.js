const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:3
    },
    password:{type:String,requred:true,minlength:4},
    isadmin:{type:Boolean,requred:true},
    contacts:{type:String,requred:true,minlength:3},
},{
    timestamps:true,

});

const User=mongoose.model('User',userSchema);

module.exports=User;