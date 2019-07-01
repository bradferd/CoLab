const express = require('express'),
    projectApi = require('../models/projects'),
    projectRouter = express.Router();

projectRouter.get('/:userId', (req, res) => {
    projectApi.getProjectsByUser(req.params.userId)
        .then(res.send('Hello World'));
})

projectRouter.get('/new', (req, res) => {
    res.send('New Project Form')
})

projectRouter.get('/:projectId', (req, res) => {
    projectApi.getProject(req.params.projectId)
        .then(res.send('Hello from Project Page'));
})

projectRouter.get('/:projectId/edit', (req, res) => {
    res.send('Project edit form');
})

module.exports = {
    projectRouter
}