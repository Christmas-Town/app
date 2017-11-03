var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.status(200).send("<h1>Please wait! The site is still developing!</h1>");
});

app.use('/ascxz', express.static("./ascxz"));

app.listen(process.env.PORT || 5118);
