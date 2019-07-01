const express = require('express'),
  userApi = require('../models/users.js'),
  projectApi = require('../models/projects.js'),
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
      projectApi.getProjectsByUser(user._id)
        .then(projects => {
          res.render('user/showUser', { user, projects })
        })
    })
})

UserRouter.get('/:userId/edit', (req, res) => {
  res.render('user/editUser.hbs')
})

UserRouter.post('/new', (req, res) => {
  userApi.newUser(req.body)
    .then(res.send('User added!'))
})

UserRouter.delete('/:userId/delete', (req, res) => {
  userApi.deleteUser(req.params.userId)
    .then(res.send('User deleted!'))
})

module.exports = {
  UserRouter
}
