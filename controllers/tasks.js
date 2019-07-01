const express = require('express')
const TasksRouter = express.Router();

TasksRouter.get('/', (req, res) => {
    res.send("Hello from Tasks page")
})

module.exports = {
    TasksRouter
};