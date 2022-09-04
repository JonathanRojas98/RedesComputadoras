const express = require('express');
const path = require('path');

const app = express();

//Static files
app.use(express.static(__dirname + '/angularapp'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});

//Starting app
app.listen(process.env.PORT || 8080);
