const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

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

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});