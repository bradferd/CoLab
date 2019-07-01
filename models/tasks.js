const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: String,
    description: String,
    projectId: mongoose.Types.ObjectId
})

const TasksCollection = mongoose.model('Tasks', TaskSchema)

const getTaskByProject = projectId => TasksCollection.find(projectId)

module.exports = {
    getTaskByProject
}