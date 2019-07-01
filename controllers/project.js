const express = require('express'),
    projectApi = require('../models/projects'),
    taskApi = require('../models/tasks'),
    ProjectRouter = express.Router();

ProjectRouter.get('/new', (req, res) => {
    res.render('projects/newProject.hbs')
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
    res.send('Project edit form');
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