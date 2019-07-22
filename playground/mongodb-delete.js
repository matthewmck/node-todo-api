// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log("Unable to connect to MondoDB server");
  }
  console.log("Connected to MondoDB server");
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: "East lunch"}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // challenges
  // db.collection("Users").deleteMany({name: "Mike"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection("Users").findOneAndDelete({
  //   _id: new ObjectID("5c0d3a713389873c6025830a")
  // }).then((result) => {
  //   console.log(result);
  // });

  // client.close();
});