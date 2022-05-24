const { Schema, model } = require('mongoose')

const projectSchema = new Schema({
    name: String,
    desc: String,
    content:
    {
        data: Buffer,
        contentType: String
    }
})

// formatea la info necesario de los campos del modelo
projectSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Project = model('Project', projectSchema)

module.exports = Project
