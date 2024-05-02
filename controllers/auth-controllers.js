const User = require('../models/user-model');
const home =async (req, res) => {
    try {
        res.send('home ')
    } catch (error) {
        console.log(error);
    }   
}  


// const register =async (req, res) => {
//     try {
//         const {username}=req.body
//         console.log(req.body)
//         res.send(`welcome to registration page using controllers${req.body} `)
//     } catch (error) {
//    res.status(400).send({message:'page not found'})
//     }
// }

// const register = async (req, res) => {
//     try {
//       const { username ,email} = req.body;
//       const user = new User({ username,email, photo: req.file.path });
//       await user.save();
//       res.send(`User ${username} registered successfully`);
//     } catch (error) {
//       res.status(400).send({ message: 'Error registering user' });
//     }
//   };

const register = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = new User({ username, email, photo: req.file.path });
    await user.save();
    res.status(201).json({
      username: user.username,
      email: user.email,
      file: user.photo
    });
  } catch (error) {
    res.status(400).send({ message: 'Error registering user' });
  }
};
module.exports={home,register}