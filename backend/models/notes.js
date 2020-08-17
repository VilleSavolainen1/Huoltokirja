const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  note: String,
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Note = mongoose.model("Notes", noteSchema);

module.exports = Note;
