const express = require('express')
const TasksRouter = express.Router()
const taskApi = require('../models/tasks')

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

module.exports = {
    TasksRouter
};