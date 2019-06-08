var template = require('art-template')

//template('script labe id',{object})
//This is not browser,
var tplStr =
<!DOCTYPE html>
<html lang = "en">
  <head>
    <meta charset = "utf-8">
    <title> Popularrobotics Dashboard</title>
    <link rel="stylesheet" href="/pubic/lib/bootstrap/dist/css/bootstrap.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jqueary.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style type="text/css">
      #packt ,h1{
        margin:20px;
        padding:15px;
      }
    </style>
  </head>
  <body>
    <p> Teamname {{Teamname}}</p>
    <p> YourTeam {{YourTeam}}  </p>
    <h1> telephone {{telephone}}</h1>
    <p>  hobbies {{each hobbies}} {{$value}} {{/each}} </p>
  </body>
</html>




var ret = template.render(data.toString(),{
  Teamname:'wheely1',
  YourTeam: 'wheely1',
  telephone: '17326841102',
  hobbies: [
  'code',
  'philosophy']

  })

fs.readFile('./tpl.html',function(err,data){
  if(err){
    return console.log('Unable to read file')
  }
  })
  console.log(ret)
