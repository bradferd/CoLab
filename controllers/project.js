const express = require('express'),
    projectApi = require('../models/projects'),
    taskApi = require('../models/tasks'),
    ProjectRouter = express.Router();

ProjectRouter.get('/new', (req, res) => {
    res.render('projects/newProject.hbs')
})

ProjectRouter.get('/:userId', (req, res) => {
    projectApi.getProjectsByUser(req.params.userId)
        .then(res.send('Hello World'));
})

ProjectRouter.get('/:projectId', (req, res) => {
    projectApi.getProject(req.params.projectId)
        .then(project => {
            taskApi.getTaskByProject(project._id)
                .then(res.render('projects/showProject', { project, tasks })
                )
        })
})

ProjectRouter.get('/:projectId/edit', (req, res) => {
    res.send('Project edit form');
})

module.exports = {
    ProjectRouter
}