const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://21501a05c3:Nanditha@cluster0.8upeuao.mongodb.net/crafts`);
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
