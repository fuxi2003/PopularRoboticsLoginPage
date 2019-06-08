var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/itcast',{usemongooseClient:true})
mongoose.promise (Global promise)
var Schema = mongoose.Schema;

  var userSchema = new Schema({
    username :{
      type: String,
      required: true
    },
    password: {
      type:String,
      required: true
    },
    email:{
      type:String,
      required: true
    ,
    telephone :{
      type:String,
      required: true
    ,
    }
    });
var  User = mongoose.model(User,userSchema)
    //title:  String,
    //author: String,
    //body:   String,
    //comments: [{ body: String, date: Date }],
    //date: { type: Date, default: Date.now },
    //hidden: Boolean,
    //meta: {
      //votes: Number,
      //favs:  Number
    //}

  var admin = new User({
    username: 'admin',
    password: '12345678'
    email: 'admin@admin.com'
    telephone:'13011021500'
    })
    admin.save(function(err,ret){
      if(err){
        console.log('Unable to saveOne')
      }
        console.log('Success to saveOne')
        console.log(ret)
      }
    })



  user.findOne({
    username:
    password:
  },function(err,ret){
    if(err){
      console.log('Unable to findOne')
    }
      console.log(ret)
  })
  //region
  // add
  //region
  user.remove({
    username:'ilanmoradi'
    password:19800211adele
  },function(err,ret){
    if(err){
      console.log('Unable to deleteOne')
    }
      console.log('Success to deleteOne')
      console.log(ret)

  }

    })
  //region
  user.findByIdandRemove([conditions],[id],[options],[callback])
  //region
