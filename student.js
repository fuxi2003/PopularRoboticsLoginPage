var express = require('/express')

var dbPath = ('/.dbpath')


exports.find= function(callback){
  fs.readFile = function(dbPath,'utf-8',err,data){
    if(err){
      return callback(error)
    }
    callback(null,JSON.parse(data).students))
  }

}
//save students//
exports.save = function(student,callback){
  fs.readFile(dbPath,'utf-8',err,data){
    if(err){
      return callback(error)
    }

    student.id = students[students.length-1].id +1
    var student(JSON.parse(data).students)
    student.push(student)
    var filedata = JSONstringify({
    students :students
    })

    fs.writeFile(dbpath,filedata,function(err){
      if(err){
        return callback(err)
      }
      callback(null)
    }
  })

}
save({
  Teamname:'',
  YourTeam:''
  },function(err){
    if(err){
      console.log('Unale to saveOne')
    }
    else{
      console.log('Success to saveOne')

    }
    })
    //update students//
exports.updateById = function(student,callback){
  fs.readFile (dbPath,'utf-8',err,data){
    if(err){
      return callback(error)
    }

    student.id = students[students.length-1].id +1
    var student(JSON.parse(data).students)
    student.push(student)
    var filedata = JSONstringify({
    students :students
    })

    fs.writeFile(dbpath,filedata,function(err){
      if(err){
        return callback(err)
      }
      callback(null)
    }
  })

  }
  save({
  Teamname:'',
  YourTeam:''
  },function(err){
    if(err){
      console.log('Unale to saveOne')
    }
    else{
      console.log('Success to saveOne')

    }
    })

}
updateById({
  id: 1,
  Teamname: 'wheely1',
  YourTeam: 'Wheely1'
  },function(err){

    })
//delete students//
exports.delete = function(){

}
