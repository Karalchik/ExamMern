const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const boatSchema=new Schema({
    model:{type:String,required:true},
    price:{type:Number,required:true},
    lenght:{type:Number,required:true},
    cabins:{type:Number,required:true},
    persons:{type:Number,required:true},
    WC:{type:Number,required:true},
    year:{type:Number,required:true},
    width:{type:Number,required:true},
    engine:{type:String,required:true},
    beds:{type:Number,required:true},
},{
    timestamps:true,
});

const Boat=mongoose.model('Boat',boatSchema);

module.exports=Boat;