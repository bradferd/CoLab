const express = require('express')
const projectsApi = require('../models/projects')
const LandingRouter = express.Router();

LandingRouter.get('/', (req, res) => {
    res.render("landing/home.hbs")
})

LandingRouter.get('/main', (req, res) => {
    projectsApi.getAllProjects()
        .then(projects => {
            const newProjects = projects.map((p) => {
                p.shortDesc = p.description.substring(0, 143) + '...'
                return p
            })
            res.render('landing/allProjects', { projects: newProjects })
        })
})

module.exports = {
    LandingRouter
};