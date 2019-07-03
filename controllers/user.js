const express = require('express'),
  userApi = require('../models/users.js'),
  projectApi = require('../models/projects.js'),
  UserRouter = express.Router()

UserRouter.get('/new', (req, res) => {
  res.render('user/newUser')
})

UserRouter.get('/all', (req, res) => {
  userApi.getAllUsers()
    .then(users => res.render('user/showAllUsers', { users }))
})

UserRouter.get('/:userId', (req, res) => {
  userApi.getUser(req.params.userId)
    .then(user => {
      projectApi.getProjectsByUser(user._id)
        .then(projects => {
          res.render('user/userProfile', { user, projects })
        })
    })
})

UserRouter.get('/:userId/edit', (req, res) => {
  userApi.getUser(req.params.userId)
    .then(user => res.render('user/editUser', { user }))
})

UserRouter.post('/new', (req, res) => {
  userApi.newUser(req.body)
    .then(res.redirect('/main'))
})

UserRouter.put('/:userId', (req, res) => {
  userApi.editUser(req.params.userId, req.body)
    .then(() => {
      res.redirect(`${req.params.userId}`)
    })
})

UserRouter.delete('/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
    .then(res.redirect('all'))
})

module.exports = {
  UserRouter
}
