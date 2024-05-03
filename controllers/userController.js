const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
    const { username, email } = req.body;
    const photo = req.file.path;

    // Create a new user
    const user = new User({ username, email, photo });

    // Save the user to the database
    try {
        await user.save();
        res.send({ username, email, photo });
    } catch (err) {
        res.status(500).send(err);
    }
};
