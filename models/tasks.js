const mongoose = require('./connection.js')

const TaskSchema = new mongoose.Schema({
    name: String,
    description: String,
    projectId: mongoose.Types.ObjectId
})

const TasksCollection = mongoose.model('Tasks', TaskSchema)

const getTaskByProject = projectId => TasksCollection.find(projectId)

const getTask = taskId => TasksCollection.findById(taskId)

const newTask = taskObject => TasksCollection.create(taskObject)

const editTask = (taskId, TaskObject) => TasksCollection.findByIdAndUpdate(taskId, TaskObject)

const deleteTask = taskId => TasksCollection.findByIdAndDelete(taskId)

module.exports = {
    getTaskByProject,
    getTask,
    newTask,
    editTask,
    deleteTask
}