require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const Note = require("./models/notes");
const Huolto = require("./models/huolto");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const loginRouter = require("./login");

const url = process.env.mongodb_uri;
const port = process.env.port;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/login", loginRouter);
//app.use(express.static('build'))

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useFindAndModify", false);

app.get("/api/notes", (req, res) => {
  Note.find({}).then((notes) => {
    res.json(notes);
  });
});

app.get("/api/jobs", (req, res) => {
  Huolto.find({}).then((notes) => {
    res.json(notes);
  });
});

app.get("/api/users", (req, res) => {
  User.find({}).then((notes) => {
    res.json(notes);
  });
});

app.get("/api/jobs/:id", (req, res) => {
  const id = req.params.id;
  Huolto.findById(id)
    .then((note) => {
      res.json(note);
    })
    .catch((error) => {
      console.log("error");
      res.status(400).send({ error: "wrong id" });
    });
});

app.post("/api/notes", (req, res) => {
  const body = req.body;
  const note = new Note({
    note: body.note,
  });

  note.save().then((newnote) => {
    res.json(newnote);
  });
});

app.delete("/api/notes/:id", (req, res) => {
  Note.findByIdAndRemove(req.params.id).then((result) => {
    res.status(204).end();
  });
});

app.put("/api/jobs/:id", (req, res, next) => {
  const body = req.body;
  const note = {
    pvm: body.pvm,
    lisätietoja: body.lisätietoja,
  };

  Huolto.findByIdAndUpdate(req.params.id, note, { new: true })
    .then((updatedNote) => {
      res.json(updatedNote);
    })
    .catch((error) => next(error));
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError" && error.kind == "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

app.use(errorHandler);

app.listen(port);
