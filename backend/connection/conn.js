const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://baljeetprajapati38:Avi12345@cluster0.10ofb.mongodb.net/",
      { useNewUrlParser: true}
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = conn;
