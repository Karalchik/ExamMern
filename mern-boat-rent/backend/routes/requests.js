const router=require('express').Router();
let Request=require('../models/request.model');

router.route('/').get((req,res)=>{
    Request.find().then(request=>res.json(request)).catch(err=>res.statusMessage(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    const baseprice=Number(req.body.baseprice);
    const boatID=req.body.boatID;
    const discount=Number(req.body.discount);
    const startdate=Date.parse(req.body.startdate);
    const enddate=Date.parse(req.body.enddate);
    const options=Array(req.body.options);

    const newRequest=new Request({
        baseprice,
        boatID,
        discount,
        startdate,
        enddate,
        options,
    });

    newRequest.save().then(()=>res.json('Request added!')).catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=>{
    Request.findById(req.params.id).then(request=>res.json(request)).catch(err=>res,statuse(400).json('Error: '+err));
});

router.route('/:id').delete((req,res)=>{
    Request.findByIdAndDelete(req.params.id).then(()=>res.json('Request deleted.')).catch(err=>res,statuse(400).json('Error: '+err));
});

router.route('/update/:id').post((req, res) => {
    Request.findById(req.params.id)
      .then(request => {
        request.baseprice=Number(req.body.baseprice);
        request.boatID=req.body.boatID;
        request.discount=Number(req.body.discount);
        request.startdate=Date.parse(req.body.startdate);
        request.enddate=Date.parse(req.body.enddate);
        request.options=Array(req.body.options);
  
        request.save()
          .then(() => res.json('Request updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports=router;