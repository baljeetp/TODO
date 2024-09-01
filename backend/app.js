const express=require("express");
const app=express();
const cors=require("cors");
const connectMongoDB= require("./connection/conn");
const auth=require("./routes/auth");
const list=require("./routes/list");
const path=require("path");
connectMongoDB();

app.use(express.json());

app.use(cors());
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "/frontend")));
    res.sendFile(path.resolve(__dirname, "/frontend/public/index.html"));
    });
// app.get("/",(req,res)=>{
//     res.send("hello");
// });

app.use("/api/v1",auth);
app.use("/api/v2",list);
app.listen(1000,()=>{
    console.log("server startd");
});
