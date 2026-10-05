const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Welcome to our HomePage")
    }
    else if(req.url==="/about"){
        res.end("This is our product detail page")
    }
    else if(req.url==="/contactus"){
        res.end("Please contact us here")
    }
    else{
        res.end("Page not found")
    }
});

server.listen(5000, ()=>{
    console.log("Server running on http://localhost:5000");
});