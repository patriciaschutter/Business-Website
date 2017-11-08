var express = require('express');
var app = express();

app.use(express.static('./', {
    index: 'homepage.html'
}));


var server = app.listen(3001,function(){
	console.log("done")
});
