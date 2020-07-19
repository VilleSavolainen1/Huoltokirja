const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    id: Number,
    työ: String,
    pvm: String,
    lisätietoja: String
  })
  
  
  noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  
  const Huolto = mongoose.model('Huolto', noteSchema)

  module.exports = Huolto