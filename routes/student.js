var express = require('express');
var router = express.Router();
var fs = require('fs');
var students = require('../models/students.json');
var path = require('path');


/* GET users listing. */
  router.get('/', function(req, res, next) {
      var id = req.params.id;
      var file = path.join(__dirname, '../models/students.json');
  fs.readFile(file, 'utf8', function(err, data){
    if(err){
    next (err);
    }else {
      console.log(data);
    var obj = JSON.parse(data);
    var student = obj;
      res.json(student)
  }
});

});

router.post('/', function(req,res,next){
  var studentArray = students;
  studentArray.push(req.body);
  console.log(studentArray);
  var newFile = path.join(__dirname, '../models/students.json');
  fs.writeFile(newFile, JSON.stringify(studentArray), function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log(studentArray)
      res.json(studentArray)
    }
  })

});
module.exports = router;
