// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log("Unable to connect to MondoDB server");
  }
  console.log("Connected to MondoDB server");
  const db = client.db('TodoApp');

  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5c0d428c3389873c6025860d")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5c0c76afb6942a3b543a3123")
  }, {
    $set: {
      name: "Matt"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});