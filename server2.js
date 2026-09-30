const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/api/user" && req.method==="GET"){
        res.setHeader("Content-Type", "application/json"); //contains additional information
        res.end(JSON.stringify({
            id:1,
            name: "John",
            age:25
        }));
    } else {
        res.statusCode=404;
        res.end("Route not found");
    }
});

server.listen(5000, ()=>{
    console.log("Server running on http://localhost:5000");
});