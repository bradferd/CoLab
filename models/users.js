const mongoose = require('./connection.js')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
})

const UserCollection = mongoose.model('Users', UserSchema, 'help')

const getUser = userId => UserCollection.findById(userId)

const newUser = newUser => UserCollection.create(newUser)

const editUser = (userId, updateUser) => UserCollection.findByIdAndUpdate(userId, updateUser)

const deleteUser = (userId) => UserCollection.findByIdAndDelete(userId)

module.exports = {
  getUser,
  newUser,
  editUser,
  deleteUser
}
