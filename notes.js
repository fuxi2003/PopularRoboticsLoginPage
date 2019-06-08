//一个不包括其他部分的路由模块
var db= require('./db');

module.exports.index = function(req,res,next){
  db.notes.findAll(function(err,notes) {
    if(err) return next(err);
    res.send(notes);
    });
};

module.exports.create = function(req,res,next){
  db.notes.create(req.body.note,function(err,note) {
    if(err) return next(err);
    res.send(note);
    });
};

module.exports.index = function(req,res,next){
  db.notes.update(req.param('id'),req.body.note,function(err,notes) {
    if(err) return next(err);
    res.send(note);
    });
};

module.exports.show = function(req,res,next){
  db.notes.find(req.param('id'),function(err,notes) {
    if(err) return next(err);
    res.send(note);
    });
};
