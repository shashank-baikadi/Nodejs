const mongoose = require('mongoose');
// URL='mongodb://127.0.0.1:27017/shashank_admin'
// URL='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5'
URL='mongodb+srv://shashank:shashank123@cluster0.rinsvnx.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0'
   mongoose.connect(URL)

  //  const URL= process.env.MONGODB_URL;
   const connectDB = async () => {
    try {
      await mongoose.connect(URL)
      console.log('connected to DB');

    } catch (error) {
      console.log("database not connected");
      process.exit(0);
    }   }


    module.exports = connectDB;