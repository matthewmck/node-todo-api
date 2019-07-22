// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log("Unable to connect to MondoDB server");
  }
  console.log("Connected to MondoDB server");
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: "something to do",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
    
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection("Users").insertOne({
  //   name: "Matt McKee",
  //   age: 29,
  //   location: "FL"
  // }, (err, result) => {
  //   if (err) {
  //     console.log("Unable to insert into users", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // client.close();
});