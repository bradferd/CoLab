const express = require('express'),
  userApi = require('../models/users.js'),
  userRouter = express.Router()

userRouter.get('/new', (req, res) => {
  res.render('user/newUser.hbs')
})

userRouter.get('/:_id', (req, res) => {
  res.render('user/showUser.hbs')
})

userRouter.get('/:_id/edit', (req, res) => {
  res.render('user/editUser.hbs')
})

module.exports = {
  userRouter
}
