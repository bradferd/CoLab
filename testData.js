const mongoose = require("./models/connection")
const Users = require("./models/users");
const { Project } = require("./models/projects");
const { Task } = require("./models/tasks");

Users.deleteAllUsers()
    .then(() => {
        return Users.deleteAllUsers()
    })
    .then(() => {
        return Users.create({
            username: 'Brad Bailey',
            password: 'hello'
        })
    })
    .then(user => {
        // Once first user is created, add two chirps
        // The argument 'bugs' is the User AFTER it has successfully been saved to the database.
        const project1Promise = Project.create({
            name: "Project 1",
            description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            projectId: user._id
        }).then(project => {
            user.project.push(project)
        })

        const project2Promise = Project.create({
            name: "Project 2",
            description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            projectId: user._id
        }).then(project => {
            user.project.push(project)
        })

        return Promise.all([project1Promise, project2Promise]).then(() => {
            user.save()
        })
    })
    .then(() => {
        return User.create({
            username: 'yvette',
            password: 'hello'
        })
    })
    .then(user => {
        const project1Promise = Project.create({
            name: "Finance API",
            description: "Who's this Duck Dodgers any how?",
            projectId: user._id
        }).then(project => {
            user.project.push(project)
        })
        const project2Promise = Project.create({
            name: "SKU Mapping Product",
            description: "You're dethpicable.",
            projectId: user._id
        }).then(project => {
            user.project.push(project)
        })

        return Promise.all([project1Promise, project2Promise]).then(() => {
            user.save()
        })
    })
    .then(() => {
        return User.create({
            username: 'elmerfudd@gmail.com',
            password: 'hello'
        })
    })
    .then(user => {
        const project1Promise = Project.create({
            name: "Project A",
            description: "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
            projectId: user._id
        }).then(project => {
            user.project.push(project)
        })

        const project2Promise = Project.create({
            name: "Project B",
            description: 'Kiww da wabbit!',
            projectId: user._id
        }).then(chirp => {
            elmer.chirps.push(chirp)
        })

        return Promise.all([project1Promise, project2Promise]).then(() => {
            user.save()
        })
    })

process.exit();