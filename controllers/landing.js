const express = require('express')
const LandingRouter = express.Router();

LandingRouter.get('/', (req, res) => {
    res.render("landing/home.hbs")
})

module.exports = {
    LandingRouter
};