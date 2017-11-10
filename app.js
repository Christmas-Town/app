var express = require('express');
var app = express();

var fs = require('fs');

var request = require('request');

var updatelog = JSON.parse(fs.readFileSync('./update.json'));

if(updatelog.update.length != 0) {
  for(i=0; i<updatelog.update.length; i++) {
    request({
        har:{
            url: "https://ascxz.ml/wp-json/wp/v2/posts",
            method:"curl",
            postData: {
                mimeType: "application/json",
                params: [{title: "Updation for ChristmasTown "+updatelog.update[i]+" to version "+updatelog[updatelog.update[i]].version, content:updatelog[updatelog.update[i]].log }]
            }
        }
    })
    updatelog.update = [];
    fs.writeFileSync('./update.json', updatelog);
  }
}

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.status(200).send("<h1>Please wait! The site is still developing!</h1>");
});

app.get('/status', function(req, res) {
    res.status(200).send("hi");
})

app.get('/2tothepowerof', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('./2tothepowerof/index.html'));
    res.end();
})

app.use('/note', express.static('./note'));

app.listen(process.env.PORT || 5118);
