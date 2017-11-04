var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.status(200).send("<h1>Please wait! The site is still developing!</h1>");
});

app.use('/2tothepowerof', function(req, res) {
	res.render("test");
})

app.listen(process.env.PORT || 5118);
