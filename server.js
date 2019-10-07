var express = require('express');
var history = require('connect-history-api-fallback');

const port = process.env.PORT || 8080;
const app = express();
app.use(history());

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + "/dist/index.html");
});

app.use('/robots.txt', function (req, res, next) {
    res.type('text/plain')
    res.send("User-agent: *\nDisallow: /");
});

app.listen(port);
console.log('server started '+ port);