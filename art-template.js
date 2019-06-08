var http = require('http')
var fs = require('fs')

var comments = [
{
  Teamname:'wheely1',
  YourTeam: 'wheely1',
  Email: 'ilanmoradi@sohu.com',
  telephone: '13011021500'
  },
  {
    Teamname:'Wheely2',
    YourTeam: 'wheely2',
    Email: 'adelegrace@163.com',
    telephone: '17326841102'

    },
    {
      Teamname:'wheely3',
      YourTeam: 'wheely3',
      Email: 'paulshaaf@163.com',
      telephone: '13923390568'

      },
      {
        Teamname:'wheely4',
        YourTeam: 'wheely4',
        Email: 'issacmoradi@sohu.com',
        telephone: '13923390262'
        },
        {
          Teamname:'wheely5',
          YourTeam: 'wheely5',
          Email: 'adelegrace@sohu.com',
          telephone: '13923390061'
          },
          {
          Teamname:'wheely6',
          YourTeam: 'wheely6',
          Email: 'adelegrace@sina.com',
          telephone: '13716676443'
          },
          ]
http.createServer(function(req,res){
  var url = req.url
  if(url === '/'){
    fs.readFile('./views/index.html',function(err,data){
      if(err){
        return res.end('404 Not Found.')
      }
      var htmlStr = template.render(data.toString(),{
        comments: comments
      })
        return  res.end('AboutPage')

      } else if{
        console.log(' Success to connect the Server')
      }
      })

  }
}
