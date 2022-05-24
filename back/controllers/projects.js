const projectsRouter = require('express').Router()

// Models
const Project = require('../models/project')

projectsRouter.get('/', async (request, response) => {
    const projects = await Project.find({})
    return response.status(200).json(projects)
})

module.exports = projectsRouter