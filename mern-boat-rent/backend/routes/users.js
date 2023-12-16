const router=require('express').Router();
let User=require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find().then(users=>res.json(users)).catch(err=>res.statusMessage(400).json('Error: '+err));
});


router.route('/auth').get((req,res)=>{
    if(req.session.user){
      return res.json({valid:true,user:req.session.user})
    }
    else{
      return res.json({valid:false})
    }
  });

router.route('/login').post((req,res)=>{
  User.findOne({email: req.body.email,password:req.body.password}).then((user) => {
    if(user){
      req.session.user=user;
      req.session.isLoged=true;
      req.session.save();
      res.json({Login:true});
    }else{
      res.json({Login:false});
    }
    return res;
  })});

router.route('/logout').post((req,res)=>{
      req.session.user=undefined;
      req.session.isLoged=false;
      req.session.save();
  });

router.route('/add').post((req,res)=>{
    console.log(req.body);
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    const isadmin=Boolean(req.body.isadmin);
    const contacts=req.body.contacts;
    const newUser=new User({username,password,email,isadmin,contacts});
    newUser.save().then(()=>res.json('User added!')).catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=>{
    User.findById(req.params.id).then(user=>res.json(user)).catch(err=>res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username=req.body.username;
      user.password=req.body.password;
      user.email=req.body.email;
      user.isadmin=Boolean(req.body.isadmin);
      user.contacts=req.body.contacts;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports=router;