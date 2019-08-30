

const http= require("http");
const server = http.createServer();
function control(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1> holi </h1>");
	res.end();
	
    }
    
	server.on("request", control)
	server.listen(9999);