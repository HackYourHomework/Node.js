/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
	if(req.url === "/"){
		const data = fs.readFileSync('./index.html');
		res.setHeader('Content-Type', 'text/html');
		res.write(data); // Sends a response back to the client
		res.end(); // Ends the response
	}else if ( req.url === "/index.js") {
		const data = fs.readFileSync('./index.js');
		res.setHeader('Content-Type', 'text/javascript');
		res.write(data);
		res.end(); 
	}else if ( req.url === "/style.css") {
		const data = fs.readFileSync('./style.css');
		res.setHeader('Content-Type', 'text/css');
		res.write(data);
		res.end(); 
	}else{
		res.writeHead(404);
		res.end('no such file found!'); 
	}
});

server.listen(3000); // The server starts to listen on port 3000
