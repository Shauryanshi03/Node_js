const express=require("express");
/*const server=express();

server.post('/',(req,res)=>{
    res.send("Data added successfully!")
});

server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
});*/

const app=express();
app.use(express.json());

const users=[
    {id: 1, name:"Aman"},
    {id: 2, name:"Rahul"}
];

/*app.get('/',(req,res)=>{
    res.send(users)
});*/

app.post('/users',(req,res)=>{
const newuser={id:3, name:req.body.name};

users.push(newuser);
res.json({
    id:3, 
    name:req.body.name
});
});

app.delete("/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const index=users.findIndex(user=>user.id===id);

    if(index===-1){
        return res.status(404).json({
            message:"User not found"
        });
    }
    users.splice(index,1);
    res.json({
        message:"User deleted"
    });
});

app.listen(1000,()=>{
    console.log("Server running at http://localhost:1000")
});