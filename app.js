var express = require('express');
var app = express();

app.get('*', function(req, res) {
  res.status(200).send("<h1>Please wait! The site is still developing!</h1>");
});

app.listen(process.env.PORT || 5118);
