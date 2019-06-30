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

userRouter.post('/new', (req, res) => {
  userApi.newUser(req.params.body)
    .then(res.send('User added!'))
})

module.exports = {
  userRouter
}
