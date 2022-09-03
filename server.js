const express = require('exoress');
const path = require('path');

const app = express();

//Static files
app.use(express.static(__dirname + '/redes-computadoras'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/redes-computadoras/index.html'));
});

//Starting app
app.listen(process.env.PORT || 8080);
