var fs = require('fs')

var p1 = new Promise(function(res,rej){
  console.log(2)
  fs.readFile ('./data/a.txt','utf-8',function(err,data){

    if(err){
      reject(error)
    }else{
      //console.log(3)
      resolve(data)
    }
    })
  })

var p2 = new Promise(function(res,rej){
  console.log(2)
  fs.readFile ('./data/b.txt','utf-8',function(err,data){

    if(err){
      reject(error)
    }else{
      //console.log(3)
      resolve(data)
    }
    })
  })

     var p3 = new Promise(function(res,rej){
        console.log(2)
        fs.readFile ('./data/c.txt','utf-8',function(err,data){

          if(err){
            reject(error)
          }else{
            //console.log(3)
            resolve(data)
          }
          })
        })
        p1.then(function(data){
          console.log(data)
          return p2
          },function(err){
              console.log('Unable to readFile',err)
          })
          .then(function(data){
          console.log(data)
          return p3
          })
          .then (function(data){
            console.log(data)
            console.log('end')
          })


  //console.log(4)
