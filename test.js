var express = require('express');
var app = express();

app.engine('html', require('../'));
app.set('views', __dirname + '/views');
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

app.get('/', function (req, res) {
    res.render('index.html', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    });
});

app.listen(3000);
console.log('3000 is the magic port');

















//var assert = require('assert');
//var CountStream = require('./countstream');
//var countStream = new CountStream('example');
//var fs = require('fs');
//var passed = 0;

//countStream.on('total',function(count){
  //assert.equal(count,1);
  //passed++;
  //});

//fs.createReadStream(__filename).pipe(countStream);

//process.on('exit',function() {
  //  console.log('Assertions passed:',passed);
    //});
