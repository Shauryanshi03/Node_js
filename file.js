const maths=require("./maths");
//const fs=require("fs"); 

/*fs.writeFile(
    "data.txt",
    "Hello Node.js",
    (err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("File written");
    }
);

const r=fs.readFileSync("hello.txt", 'utf-8')
console.log(r);

fs.appendFile("hello.txt","\nwelcome",(er)=>{
    if(er){
        console.log("error occured")
    }
    else{
        console.log("data added successfully")
    }
})

fs.unlink("data.txt",(er)=>{
    if(er){
        console.log("error occured")
    }
    else{
        console.log("file deleted")
    }
})

fs.rename("hello.txt","welcome.txt",(er)=>{                      
    if(er){
        console.log("error occured")
    }
    else{
        console.log("file renamed")
    }
})*/

/*fs.readFile("basic.html","utf-8",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }    
        else{
            console.log(data);
        }
    }
);*/

/*fs.copyFile("welcome.txt","data.txt",(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("file copied");
    }
})*/

/*fs.mkdir("uploads",(err)=>{
    if(err){
        console.log(err);
    }
})*/

/*fs.watch("data.txt",(eventType,filename)=>{
    console.log(eventType,filename);
});*/

console.log(maths.div(20,2));
console.log(maths.mul(20,2));
console.log(maths.sub(20,2));
console.log(maths.add(20,2));