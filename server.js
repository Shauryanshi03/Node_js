const express=require("express");
const server=express();

server.get('/',(req,res)=>{
    res.send("Hello express.js")
});

server.listen(2000,()=>{
    console.log("server created successfully!")
})