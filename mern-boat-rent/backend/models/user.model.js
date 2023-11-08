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
    passwort:{type:String,requred:true},
    isadmin:{type:Boolean,requred:true},
    contacts:{type:String,requred:true},
    history:{type:Array,requred:true},
},{
    timestamps:true,

});

const User=mongoose.model('User',userSchema);

module.exports=User;