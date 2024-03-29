const mongoose = require('./connection.js')

const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    userId: mongoose.Types.ObjectId
})

const ProjectCollection = mongoose.model('Projects', ProjectSchema)

const getProjectsByUser = userId => ProjectCollection.find({ userId })

const getAllProjects = () => ProjectCollection.find()

const getProject = projectId => ProjectCollection.findById(projectId)

const newProject = projectObject => ProjectCollection.create(projectObject)

const editProject = (projectId, projectObject) => ProjectCollection.findByIdAndUpdate(projectId, projectObject)

const deleteProject = projectId => ProjectCollection.findByIdAndDelete(projectId)

module.exports = {
    getAllProjects,
    getProjectsByUser,
    getProject,
    newProject,
    editProject,
    deleteProject
}