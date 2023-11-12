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
    password:{type:String,requred:true,minlength:5},
    isadmin:{type:Boolean,requred:true},
    contacts:{type:String,requred:true,minlength:3},
    history:{type:Array,requred:true},
},{
    timestamps:true,

});

const User=mongoose.model('User',userSchema);

module.exports=User;