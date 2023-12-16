const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const requestSchema=new Schema({
    boatID:{type:String,required:true},
    userID:{type:String,required:true},
    startdate:{type:Date,required:true},
    enddate:{type:Date,required:true},
    options:{type:Array,required:true},
},{
    timestamps:true,
});

const Request=mongoose.model('Request',requestSchema);

module.exports=Request;