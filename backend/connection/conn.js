const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://baljeetprajapati38:Avi12345@cluster0.10ofb.mongodb.net/",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(400).json({ message: "Database connection failed" });
  }
};

module.exports = conn;