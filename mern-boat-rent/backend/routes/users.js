const router=require('express').Router();
let User=require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find().then(users=>res.json(users)).catch(err=>res.statusMessage(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    console.log(req.body);
    const username=req.body.username;
    const password=req.body.passwort;
    const email=req.body.email;
    const isadmin=Boolean(req.body.isadmin);
    const contacts=req.body.contacts;
    const history=Array(req.body.history);
    const newUser=new User({username,password,email,isadmin,contacts,history});
    newUser.save().then(()=>res.json('User added!')).catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=>{
    User.findById(req.params.id).then(user=>res.json(user)).catch(err=>res,statuse(400).json('Error: '+err));
});

module.exports=router;