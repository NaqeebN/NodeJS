const http=require('http');

var dt= require('./module1')

http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/plain '})
    res.end("Naqeeb Naushad\n today is "+ dt.giveDate())


}


).listen(8080,()=>{

    console.log(" Using port 8080")
})

function sayHello(name){

    console.log("Hey"+name)
}
sayHello("Naqeeb");