const express = require('express'),
  userApi = require('../models/users.js'),
  UserRouter = express.Router()

UserRouter.get('/new', (req, res) => {
  res.render('user/newUser.hbs')
})

UserRouter.get('/all', (req, res) => {
  userApi.getAllUsers()
    .then(users => res.render('user/showAllUsers.hbs', { users }))
})

UserRouter.get('/:userId', (req, res) => {
  userApi.getUser(req.params.userId)
    .then(user => {
      res.render('user/showUser.hbs', { user })
    })
})

UserRouter.get('/:_id/edit', (req, res) => {
  res.render('user/editUser.hbs')
})

UserRouter.post('/new', (req, res) => {
  userApi.newUser(req.body)
    .then(res.send('User added!'))
})

module.exports = {
  UserRouter
}
