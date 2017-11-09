var express = require('express');
var app = express();

var fs = require('fs');

/*.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.status(200).send("<h1>Please wait! The site is still developing!</h1>");
});

app.get('/2tothepowerof', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('./2tothepowerof/index.html'));
    res.end();
})

app.use('/note', express.static('./note'));*/

app.use('/*', function(req, res) {
    res.redirect(301, 'https://christmastown.herokuapp.com'+req.url);
})

app.listen(process.env.PORT || 5118);
