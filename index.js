const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const dotenv   = require('dotenv');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const PORT = 3000;

dotenv.config();

//Connect to Db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true },
{ useUnifiedTopology: true },
() => console.log('connection to D')
);


//Middleware
app.use(express.json());
//Route Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => console.log('Up and running'));