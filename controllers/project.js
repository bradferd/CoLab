const express = require('express'),
    projectApi = require('../models/projects'),
    ProjectRouter = express.Router();

ProjectRouter.get('/new', (req, res) => {
    res.send('New Project Form')
})

ProjectRouter.get('/:userId', (req, res) => {
    projectApi.getProjectsByUser(req.params.userId)
        .then(res.send('Hello World'));
})

ProjectRouter.get('/:projectId', (req, res) => {
    projectApi.getProject(req.params.projectId)
        .then(res.send('Hello from Project Page'));
})

ProjectRouter.get('/:projectId/edit', (req, res) => {
    res.send('Project edit form');
})

module.exports = {
    ProjectRouter
}