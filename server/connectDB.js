const mongoose = require("mongoose"); //mongoose for mongodb

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI); //trying to connect to mongodb database
    console.log(`Database connected ${conn.connection.host}`); //database connection code
  } catch (error) {
    //error message exiting with code 1
    console.log(error);
    process.exit(1);
  }
};

//export connectDB
module.exports = connectDB;
