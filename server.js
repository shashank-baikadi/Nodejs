require('dotenv').config();
const express =require('express');
const app = express();
const router = require('./router/auth-router');
const connectDB = require('./utils/db');

app.use(express.json());
app.use('/api/auth', router);

app.get('/', (req, res) => {
    res.send('Hello World..')
})




connectDB().then(() => {
    console.log('database connected');
    app.listen(3000);
})



