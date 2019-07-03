const express = require('express')
const projectsApi = require('../models/projects')
const LandingRouter = express.Router();

LandingRouter.get('/', (req, res) => {
    res.render("landing/home.hbs")
})

LandingRouter.get('/main', (req, res) => {
    projectsApi.getAllProjects()
        .then(projects => {
            res.render('landing/allProjects', { projects })
        })
})

module.exports = {
    LandingRouter
};