const express = require('express');  
const app = express();  
const taskRoutes = express.Router();  
// Require Task model in our routes module  
let Task = require('../models/Task');  
// Defined store route  
taskRoutes.route('/add').post(function (req, res) {  
  let task = new Task(req.body);  
  task.save()  
    .then(task => {  
      res.status(200).json({'Task': 'Task has been added successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  
    });  
});  
// Defined get data(index or listing) route  
taskRoutes.route('/').get(function (req, res) {  
  Task.find(function (err, tasks){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(tasks);  
    }  
  });
});  
// Defined edit route  
taskRoutes.route('/edit/:id').get(function (req, res) {  
  let id = req.params.id;  
  Task.findById(id, function (err, task){  
      res.json(task);   
  });  
});  
//  Defined update route  
taskRoutes.route('/update/:id').post(function (req, res) {  
  Task.findById(req.params.id, function(err, task) {  
    if (!task)  
      res.status(404).send("Record not found");  
    else {  
      task.TaskName = req.body.TaskName;  
      task.TaskDescription = req.body.TaskDescription;  
      task.TaskPrice = req.body.TaskPrice;  
 task.save().then(task => {  
          res.json('Update complete');  
      })  
      .catch(err => {  
            res.status(400).send("unable to update the database");  
      });  
    }  
  });  
});  
// Defined delete | remove | destroy route  
taskRoutes.route('/delete/:id').get(function (req, res) {  
    Task.findByIdAndRemove({_id: req.params.id}, function(err, task){  
        if(err) res.json(err);  
        else res.json('Successfully removed');  
    });  
});  
module.exports = taskRoutes;  