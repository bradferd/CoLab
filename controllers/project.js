const express = require('express'),
    userApi = require('../models/users'),
    projectApi = require('../models/projects'),
    taskApi = require('../models/tasks'),
    ProjectRouter = express.Router({ mergeParams: true });

ProjectRouter.get('/new', (req, res) => {
    userApi.getUser(req.params.userId)
        .then((user) => res.render('projects/newProject', { user }))
})

ProjectRouter.post('/', (req, res) => {
    console.log(req.params.userId)
    req.body.userId = req.params.userId
    projectApi.newProject(req.body)
        .then((project) => {
            res.send(project.userId)
        })
})

ProjectRouter.get('/:projectId', (req, res) => {
    projectApi.getProject(req.params.projectId)
        .then(project => {
            taskApi.getTaskByProject(project._id)
                .then(tasks => {
                    res.render('projects/showProject', { project, tasks })
                })
        })
})

ProjectRouter.get('/:projectId/edit', (req, res) => {
    projectApi.getProject(req.params.projectId)
        .then(project => res.render('projects/editProject', { project }))
})

ProjectRouter.put('/:projectId', (req, res) => {
    projectApi.editProject(req.params.projectId, req.body)
        .then(() => {
            res.send("project updated")
        })
})

ProjectRouter.delete('/:projectId', (req, res) => {
    projectApi.deleteProject(req.params.projectId)
        .then(res.send('Project removed'))
})

module.exports = {
    ProjectRouter
}