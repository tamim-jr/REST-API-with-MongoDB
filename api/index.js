const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');


dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then (console.log(`server connected`))
.catch((err) => console.log(`err: server not connected`));

// app.use('/', (req, res)=>{
//     res.send(`Hello Home`)
// })

app.use('/api/auth', authRoute);

app.listen('5000', ()=>{
    console.log(`Backend server start at port 5000`);
})