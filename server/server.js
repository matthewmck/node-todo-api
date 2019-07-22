require("./config/config");

const _ = require("lodash");
let express = require("express");
let bodyParser = require("body-parser");

let { mongoose } = require("./db/mongoose");
let { ObjectID } = require("mongodb");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  } else {
    Todo.findById(id).then(
      todo => {
        if (!todo) {
          return res.status(404).send();
        }

        res.send({ todo });
      },
      e => {
        res.status(404).send();
      }
    );
  }
});

app.delete("/todos/:id", (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  } else {
    Todo.findByIdAndRemove(id)
      .then(todo => {
        if (!todo) {
          return res.status(404).send();
        }

        res.send({ todo });
      })
      .catch(e => {
        res.status(404).send();
        juj;
      });
  }
});

app.patch("/todos/:id", (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ["text", "completed"]);

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completed = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`started on port ${port}`);
});

module.exports = { app };
