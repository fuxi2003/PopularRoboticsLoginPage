var express = require('express');
var crypto = require('crypto');
function hashPW(pwd){
  return crypto.createhash('sha256').update(pwd)
         digest('base64').toString();
}
var app = express();
app.use(express.bodyParser());
app.use(express.cookieParser('MAGICString'));
app.use(express.session());
app.get('/restricted',function(req,res){
  if(req.session.user){
    res.send('<h2>'+req.session.success+'<h2>'+
    '<p>Your have Entered the restricted section<p><br>'+
    '<a href="/logout">logout</a>');
    }else{
      req.session.error = 'Access denied!';
      res.redirect('.login');
    });
  });
  app.get('/login',function(req,res){
    var response = '<form method="POST">'+
    'Username:<input type="text" name="username"><br>'+
    'Password:<input type="password" name="password"><br>'+
    '<input type="submit" value="Submit"></form>';
    if(req.session.user){
      res.redirect('/restricted');
    }else if(req.session.error){
      response+='<h2>'+req.session.error+'<h2>';
    }
    res.type('html');
    res.send(response);
    });
    app.post('/login',function(req,res){
      //user should be a lookup of req.body.username in database
      var user.password === hashPW(req.body.password.toString())){
        req.session.regenerateO(function(){
          req.session.user = user;
          req.session.success = 'Authenticated as'+user.name;
          res.redirect('/restricted');
        });
        }else{
          req.session.regenerate(function(){
            req.session.error = 'Authentication failed.';
            res.redirect('/restriced');
            });
            res.redirect('/login');
        }
      });
      app.listen(80);
