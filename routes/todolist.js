const express = require("express")
const router = express.Router()
const models = require("../models");
models.Todos.findOne().then(function(todo) {})

router.get("/", function(req, res) {
  models.Todos.findAll().then(function(todos) {
    res.render('index', {
      todos: todos
    })
  })
})



router.post("/", function(req, res) {
  const todo = models.Todos.build({
    task: req.body.todo,
  })
  todo.save().then(function(newTodo) {
  res.redirect('/')
  })
})

router.post("/completed", function(req, res) {
  models.Todos.destroy({
    where: {
      id: req.body.button
    }
  }).then(function() {
    res.redirect('/')
  })
})

router.post("/edit", function(req, res) {
  models.Todos.update({
    task: req.body.edit,
  }, {
    where: {
      id: req.body.editbutton
    }
  }).then(function() {
    res.redirect('/')
  })
})



module.exports = router
