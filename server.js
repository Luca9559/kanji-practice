let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));
let port = 8000;
app.listen(port);
console.log('server running on ' + port);