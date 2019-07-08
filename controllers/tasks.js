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
    taskApi.getTask(req.params.taskId)
        .then(task => {
            res.render('tasks/showTasks', { task })
        })
})

TasksRouter.get('/:taskId/edit', (req, res) => {
    taskApi.getTask(req.params.taskId)
        .then(task => {
            projectApi.getProject(req.params.projectId)
                .then(project => {
                    res.render('tasks/editTask', { task, project })
                })
        })
})

TasksRouter.post('/', (req, res) => {
    req.body.projectId = req.params.projectId
    taskApi.newTask(req.body)
        .then(() => {
            res.redirect(`/user/${req.params.userId}/projects/${req.params.projectId}`)
        })
})

TasksRouter.put('/:taskId', (req, res) => {
    taskApi.editTask(req.params.taskId, req.body)
        .then(() => {
            res.redirect(`/user/${req.params.userId}/projects/${req.params.projectId}`)
        })
})

TasksRouter.delete('/:taskId', (req, res) => {
    taskApi.deleteTask(req.params.taskId)
        .then(() => {
            res.redirect(`/user/${req.params.userId}/projects/${req.params.projectId}`)
        })
})

module.exports = {
    TasksRouter
};