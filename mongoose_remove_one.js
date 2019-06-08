var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var words = mongoose.model('Words',wordSchema);
mongoose.connection.once('open',function(){
  var query = Words.findOne().where('word','unhappy');
  query.exec(function(err,doc){
    console.log("Before delete:");
    console.log(doc);
    moogoose.disconnect();
    });
  });
 });
});
