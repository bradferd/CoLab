const express = require('express')
const TasksRouter = express.Router()
const taskApi = require('../models/tasks.js')

TasksRouter.get('/', (req, res) => {
    res.send("Hello from Tasks page")
})

TasksRouter.get('/new', (req, res) => {
    res.send("New Task Form")
})

TasksRouter.get('/:taskId', (req, res) => {
    res.send("single task page")
})

TasksRouter.get('/:taskId/edit', (req, res) => {
    res.send("task edit form")
})

TasksRouter.post('/', (req, res) => {
    taskApi.newTask(req.body)
        .then(() => {
            res.send('task posted!')
        })
})

TasksRouter.put('/:taskId', (req, res) => {
    taskApi.updateTask(req.params.taskId, req.body)
        .then(() => {
            res.send('task updated!')
        })
})

TasksRouter.delete('/:taskId', (req, res) => {
    taskApi.deleteTask(req.params.taskId)
        .then(res.send("Task deleted!"))
})

module.exports = {
    TasksRouter
};