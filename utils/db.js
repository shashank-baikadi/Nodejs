const mongoose = require('mongoose');
// URL='mongodb://127.0.0.1:27017/shashank_admin'
   // mongoose.connect(URL)

   const URL= process.env.MONGODB_URL;
   const connectDB = async () => {
    try {
      await mongoose.connect(URL)
      console.log('connected to DB');

    } catch (error) {
      console.log("database not connected");
      process.exit(0);
    }   }


    module.exports = connectDB;