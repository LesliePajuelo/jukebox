var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'client')));
console.log('Listenting on port 3000' )
app.listen(process.env.PORT || 3000);
