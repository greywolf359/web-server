var express = require('express');
var middleware = require('./middleware');
var app = express();

const PORT = 3000;

app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (req,res)=>{
	res.send('about!');
})

app.use(express.static(__dirname + '/public'))

app.listen(PORT,()=>{
	console.log('listening on port: ' + PORT);
});

/*
	git status
	-a "all changed files are added to commit that git knows about"
	-m "allows you to add a message"

*/