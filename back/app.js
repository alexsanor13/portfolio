const config = require('./utils/config')

// Por defecto configura que cualquier origen puede acceder a la api
const express = require('express')
const app = express()
const cors = require('cors')

const projectsRouter = require('./controllers/projects')

// Middlewares
const logger = require('./utils/consoleLogger')

// MongoDB
const mongoose = require('mongoose')

const connectionString = config.MONGO_DB_URI || ""

// conexión a mongodb
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        logger.info('Database connected')
    }).catch(err => {
        logger.error(err)
    })

process.on('uncaughtException', () => {
    mongoose.disconnect()
})

app.use(cors())

// end-point
app.use('/projects', projectsRouter)

module.exports = app
