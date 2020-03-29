const express = require('express')
const app = express()
const path = require("path")
const port = process.env.PORT || 3500
const List = require('./models/tasklist')
const list = new List()
const Task = require('./models/task')
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
  })

app.get("/list", (req, res) => {
  function checkDate(date){ 
    const start = Date.now();
    const nextDate = Date.parse(date)
    let newNum = nextDate - start
    let daysAway = newNum/(1000*60*60*24)
    return daysAway
  }
  function showDescrip(){
    console.log(e)
    }
  res.render("listpg",{showDescrip,checkDate,list: list.taskes})
})

app.post("/",(req,res) => {
    const {name,dueDate,description,isUrgent} = req.body
    const task = new Task(name,dueDate,description,isUrgent,isComplete = false)
    console.log(task)
    list.addTask(task)
    res.redirect("/list")
})

app.post("/delete/:id",(req,res) => {
  const taskId = req.params.id
  console.log(req.path)
  list.deleteTask(taskId)
  function checkDate(date){ 
    const start = Date.now();
    const nextDate = Date.parse(date)
    let newNum = nextDate - start
    let daysAway = newNum/(1000*60*60*24)
    return daysAway
  }
  res.render("listpg",{checkDate,list: list.taskes})
})

app.post("/delete/:id",(req,res) => {
  const taskId = req.params.id
  console.log(req.path)
  list.deleteTask(taskId)
  function checkDate(date){ 
    const start = Date.now();
    const nextDate = Date.parse(date)
    let newNum = nextDate - start
    let daysAway = newNum/(1000*60*60*24)
    return daysAway
  }
  res.render("listpg",{checkDate,list: list.taskes})
})

app.get("/complete", (req, res) => {
  function checkDate(date){ 
    const start = Date.now();
    const nextDate = Date.parse(date)
    let newNum = nextDate - start
    let daysAway = newNum/(1000*60*60*24)
    return daysAway
  }
  res.render("complete",{checkDate,list: list.taskes})
})

app.post("/complete/:id",(req,res,next) => {
  const taskId = req.params.id
  list.taskes[taskId].isComplete = true
  function checkDate(date){ 
    const start = Date.now();
    const nextDate = Date.parse(date)
    let newNum = nextDate - start
    let daysAway = newNum/(1000*60*60*24)
    return daysAway
  }
  res.render("complete",{checkDate,list: list.taskes})
})

app.get("/edit/:id", (req, res) => {
  const taskId = req.params.id
  let editTask = list.taskes[taskId]
 
  res.render("edit",{editTask: editTask})
})

app.post("/edit/:id", (req, res) => {
  const taskId = req.params.id
  const {name,dueDate,description,isUrgent} = req.body
  list.updateTask(taskId,name,dueDate,description,isUrgent,isComplete = false)
  res.redirect("/list")
})

app.post("/backToList/:id", (req, res) => {
  const taskId = req.params.id
  const {name,dueDate,description,isUrgent} = req.body
  list.updateTask(taskId,name,dueDate,description,isUrgent,isComplete = false)
 
  res.redirect("/list")
})



app.listen(port, () => console.log(`Now listening on port ${port}.`))