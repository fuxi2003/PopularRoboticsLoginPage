var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var words = mongoose.model('Words',wordSchema);
mongoose.connection.one('open',function(){
  var query = Words.findOne().where('word','gratifications');
    console.log("Before Update:");
    console.log(doc.toString());
    var query = doc.update({$set:{word:'gratifications',
                                        size:13,last:'s'},
                            $push:{letters:'s'}});
    query.exec(function(err,results){
    console.log("\n%d Documents updated",
    results);
    Words.findOne({word:'gratifications'},function(err,doc){
      console.log("\nAfter Upate:");
      console.log(doc.toString());
      mongoose.disconnect();
      });
     });
    });
  });
