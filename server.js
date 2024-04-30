const express =require('express');
const app = express();
const router = require('./router/auth-router');

app.use('/api/auth', router);

app.get('/', (req, res) => {
    res.send('Hello World..')
})

app.listen(3000);


