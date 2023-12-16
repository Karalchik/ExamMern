const express = require('express');
const cors = require('cors');
const OpenAI =require('openai');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const openai = new OpenAI({
  apiKey: "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"
});
app.use(express.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: new session.MemoryStore(),
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 60000 * 60 * 24
  }
}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
); 
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const boatsRouter = require('./routes/boats');
const requestsRouter = require('./routes/requests');
const usersRouter = require('./routes/users');

app.use('/api/boats', boatsRouter);
app.use('/api/requests', requestsRouter);
app.use('/api/users', usersRouter);

app.post('/api/chat',async(req,res)=>{
  const {message}=req.body;
  const completion=await openai.completions.create({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 512,
  });
  res.send(completion.choices[0].text);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});