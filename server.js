var express = require('express');
var app = express();

const PORT = 3000;

//middleware example
var middleware = {
	requireAuthentication: function(req,res,next){
		console.log('private route hit');
		next();
	},
	logger: function(req,res,next){
		var d = new Date().toString();
		console.log('REQUEST: ' + d + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
}

app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (req,res)=>{
	res.send('about!');
})

app.use(express.static(__dirname + '/public'))

app.listen(PORT,()=>{
	console.log('listening on port: ' + PORT);
});