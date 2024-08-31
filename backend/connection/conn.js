const mongoose=require("mongoose");
const conn=async(req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://baljeetprajapati38:Avi12345@cluster0.10ofb.mongodb.net/").then(()=>{
            console.log("database connected");
        });
    } catch (error) {
      res.status(400).json({message:"not connected",});
    }
};
conn();