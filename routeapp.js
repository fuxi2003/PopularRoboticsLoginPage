var fs = require('fs')
var express = require('express')
var router = express.Router()
app.get('/',function(req,res)=>{

  fs.readFile('/db.json','utf-8',function(err,data)=>{
    if(err){
      return (res.status(500).send('server'))
    }
    res.JSON.stringify()

    })
  res.render('index.html',{fruits:[
  'Course W1',
  'Course W2',
  'Course W3',
  ]
  })
})
   router.get('/login', function(req,res){
     res.render('login.html')
    })
    router.post('login',function(req,res){
      var body = req.body

      User.findOne({
        email: body.email,
        password: md5(md5(body.password))
      },function(err,user){
        if(err){
          return res.status(500).json({
            err_code: 500,
            message: err.message
            })
        }

        if (!user){
         return res.status(200).json({
           err_code: 1,
           message: 'Email or password is invalid.'
           })
        }
        //if user sein, Success for login through session
        req.session.user = user
        res.status(200).json({
          err_code :1,
          message:'ok'
          })
      })
    })


    router.get('register', function(req,res){
      res.render('register.html')
      })

    router.post('/register',function(req,res){

      })

    router.get('/logout',function(req,res){
      //clear state logout
      req.session.user = null
      //redirect
      req.redirect('/login')      
      })

    //render edit page

    router.post('students/new',function(req,res){
     student.save(req.body,function(err){
       if(err){
         return  res.status(500).send('Server err.')
       }
         res.redirect('/student')
       })
    });
    router.get('students/edit',function(req,res){

    });
    router.post('students/edit',function(req,res){

    });
    router.get('students/delet',function(req,res){

    });

    app.listen(3000,()=>{
      console.log('server is on up 3000');
      });


  //  app.get(express.static(__dirname + '/public'));

    //app.use((req,res,next)=>{
      //var now = new Date().toString();
      //var log = `${now}: ${req.method}. ${req.url}`;

      //console.log(log)
      //fs.appendFile('server.log',log+`\n`),
      //next();
    //});
    //hbs.registerHelper('getCurrentYear',()=>{
      //return new Date().getFullYear()
      //});
    //hbs.registerHelper('screamIt',(text)=>{
      //return text.toUppercase();
      //});
    //app.get('/',(req,res)=>{
      //res.send('<h1>Hello Express')
      //res.send({
        //name:'Ilan',
        //likes:[
        //'Marathon',
        //'cities'
        //]
        //});
      //});
      //res.render('home.hbs',{
        //pageTitle:'Home Page',
        //WelcomeMessage:'welcome to my Website',
        //CurrentYear:new Date().getFullYear()
        //});
      //});

    //app.get('/about',(req,res)=>{
      //res.render('about.hbs',{
      //  pageTitle:'About Page',
        //CurrentYear: new Date().getFullYear()
        //});
      //});

    //app.get('/bad',(req,res)=>{
      //res.send({
        //errorMessage:'Unable to handle request'
      //});
      //});
  //  }



//const express = require('express');

//const hbs = require('hbs');
//var app = express();

//hbs.registerPartials(__dirname +'/views/partials');

//const express = require('express');

//var app =  express();

//app.get('/',(req,res)=> {
  //res.send('<h1> Hello Express !</h1>');
//});
  //res.send({ name: 'Ilan',likes :
  //['philosophy',
   //'Cities'
  //]})

  //app.get('/about',(req,res)=> {
    //res.send('AboutPage')

    //app.get('/bad',(req,res)=> {
  //  res.send({
      //errorMessage:'Unable to handle request'
      //})
    //})
  //})
//})
