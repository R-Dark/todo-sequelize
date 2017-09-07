const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
// END OF PACKAGE CALLS AND USES


const todoRoute = require("./routes/todoList")
app.use(todoRoute)

// HOST MODE FOR ADDRESS 0.0.0.0:3000
app.listen(3000, function() {
  console.log("Express started on port 3000")
})
