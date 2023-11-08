const router=require('express').Router();
let Boat=require('../models/boat.model');

router.route('/').get((req,res)=>{
    Boat.find().then(boat=>res.json(boat)).catch(err=>res.statusMessage(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    const model=req.body.model;
    const lenght=Number(req.body.lenght);
    const cabins=Number(req.body.cabins);
    const persons=Number(req.body.persons);
    const WC=Number(req.body.WC);
    const year=Number(req.body.year);
    const width=Number(req.body.width);
    const engine=req.body.engine;
    const beds=Number(req.body.beds);

    const newBoat=new Boat({
        model,
        lenght,
        cabins,
        persons,
        WC,
        year,
        width,
        engine,
        beds,
    });

    newBoat.save().then(()=>res.json('Boat added!')).catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=>{
    Boat.findById(req.params.id).then(boat=>res.json(boat)).catch(err=>res,statuse(400).json('Error: '+err));
});

router.route('/:id').delete((req,res)=>{
    Boat.findByIdAndDelete(req.params.id).then(()=>res.json('Boat deleted.')).catch(err=>res,statuse(400).json('Error: '+err));
});

router.route('/update/:id').post((req, res) => {
    Boat.findById(req.params.id)
      .then(boat => {
        boat.model=req.body.model;
        boat.lenght=Number(req.body.lenght);
        boat.cabins=Number(req.body.cabins);
        boat.persons=Number(req.body.persons);
        boat.WC=Number(req.body.WC);
        boat.year=Number(req.body.year);
        boat.width=Number(req.body.width);
        boat.engine=Number(req.body.engine);
        boat.beds=Number(req.body.beds);
  
        boat.save()
          .then(() => res.json('Boat updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports=router;