var express = require('express');
var app = express();
var controller = require('./controller');

//var router = require('.router')
//var bodyParser = require('body_parser')

//app.use(static('./public'))
//app.use(static('./node_modules'))
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

app.engine('html',require('express_art_template'))
app.set('views',path.join(__dirname,'./views/'))
//parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({extended:false}))
//app.use(bodyParser.json())

app.use('/',express.bodyParser());
app.use('/',express.logger());
app.use('/',express.query());
app.use('/',express.basicAuth());


app.get('/notes',controller.notes.index);
app.post('/notes',controller.notes.create);
app.patch('/notes/:id',controller.notes.update);
app.get('/notes/:id',controller.notes.show);

module.exports = app
//app.use(router)
//app.use()
//use the unsupported middware express-session
//app.use(session({
  //secret: 'keyboard cat',
  //resave: false,
  //saveUninitialized: true
  //})
  //)
//app.listen(5000,function () {
  //console.log('running on server 3000');
  //})









//app.get('/',function(req,res)=>{
  //fs.readFile('/db.json','utf-8',function(err,data)=>{
    //if(err){
      //return (res.status(500).send('server'))
    //}
    //res.JSON.stringify()

  //  })
  //res.render('index.html',{
    //fruits:[
    //'Course W1',
    //'Course W2',
    //'Course W3',
    //]
    //student:student
    //})
//})

//app.get('/',function(req,res){
  //res.render()
  //})
//app.get('/',function(req,res){
  //res.render('404.html')
  //});
//app.get('/',function(req,res){
  //res.render('admin/index.html',{
    //title:'Manage Courses',


    //})
  //});




//app.get('/',function(req,res){
  //res.send('/page')
  //})

//app.get('/post',function(req,res){
  //res.send('post page')
  //})

//app.set('views',render)




//app.get('/comment',function(req,res){
  //var comment = req.jQuery
  //comment.dateTime = '2019-06-05 10:00:00',
  //comments.unshift(comment)
  //res.redirect('/')
  //res.statusCode = 302
  //res.setHeader('Location','/')
//})

//var express = require('express');
//var app = express();
//app.engine('art', require('express-art-template'));
//app.set('view options', {
  //  debug: process.env.NODE_ENV !== 'production'
//});

//app.get('/', function (req, res) {
  //  res.render('index.art', {
    //    user: {
      //      name: 'aui',
        //    tags: ['art', 'template', 'nodejs']
        //}
    //});
//});
