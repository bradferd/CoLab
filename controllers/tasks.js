const express = require('express')
const TasksRouter = express.Router({ mergeParams: true })
const taskApi = require('../models/tasks.js')
const userApi = require('../models/users')
const projectApi = require('../models/projects')

TasksRouter.get('/new', (req, res) => {
    userApi.getUser(req.params.userId)
        .then(user => {
            projectApi.getProject(req.params.projectId)
                .then(project => {
                    res.render('tasks/newTask', { user, project })
                })
        })
})

TasksRouter.get('/:taskId', (req, res) => {
    res.send("single task page")
})

TasksRouter.get('/:taskId/edit', (req, res) => {
    res.send("task edit form")
})

TasksRouter.post('/', (req, res) => {
    req.body.projectId = req.params.projectId
    taskApi.newTask(req.body)
        .then((task) => {
            res.send(task.projectId)
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