const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
  secret:'secret',
  resave:false,
  saveUninitialized:false,
  cookie:{
    secure:false,
    maxAge:1000*60*60*24
  }
}));

app.get('/',(req,res)=>{
  if(req.session.username){
    return res.json({valid:true,username:req.session.username})
  }
  else{
    return res.json({valid:false})
  }
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
); 
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const boatsRouter = require('./routes/boats');
const requestsRouter = require('./routes/requests');
const usersRouter = require('./routes/users');

app.use('/boats', boatsRouter);
app.use('/requests', requestsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});