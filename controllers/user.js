const express = require('express'),
  userApi = require('../models/users.js'),
  userRouter = express.Router()

userRouter.get('/new', (req, res) => {
  res.render('user/newUser.hbs')
})

userRouter.get('/all', (req, res) => {
  userApi.getAllUsers()
    .then(users => res.render('user/showAllUsers.hbs', { users }))
})

userRouter.get('/:userId', (req, res) => {
  userApi.getUser(req.params.userId)
    .then(user => {
      res.render('user/showUser.hbs', { user })
    })
})

userRouter.get('/:_id/edit', (req, res) => {
  res.render('user/editUser.hbs')
})

userRouter.post('/new', (req, res) => {
  userApi.newUser(req.body)
    .then(res.send('User added!'))
})

module.exports = {
  userRouter
}
