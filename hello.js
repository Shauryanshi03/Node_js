const os=require("os")
/*console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.arch());
console.log(os.homedir());
console.log("welcome to our page");
console.log(os.type());
console.log(os.version());
console.log(os.platform());
console.log(os.userInfo());
console.log(os.cpus());*/

const path=require("path")
//let file=console.log(path.join("c","desktop","data.txt"))
//let myfile=console.log(path.extname("C:\Program Files\nodejs.txt"))
//let myfile=console.log(path.basename("C:\Program Files\nodejs.txt"))
//let myfile=console.log(path.parse("C:\Program Files\nodejs.txt"))
let myfile=console.log(path.isAbsolute("C:\Program Files\nodejs.txt"))
