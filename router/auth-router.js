const express = require('express');
const router = express.Router();
const {home} = require('../controllers/auth-controllers');
// const { register } = require('../controllers/auth-controllers');
const authcontroller = require('../controllers/auth-controllers');

//normal
router.get('/', (req, res) => {
    res.send('shashank')
});


//http://localhost:3000/api/auth/login

router.route('/login').get((req, res) => {
    res.send('welcome to login ')
})




//http://localhost:3000/api/auth/h
router.route('/h').get(home);

//http://localhost:3000/api/auth/register
router.route('/register').post(authcontroller.register);


module.exports = router; 