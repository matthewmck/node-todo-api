// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log("Unable to connect to MondoDB server");
  }
  console.log("Connected to MondoDB server");
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5c0c65c21d1b533324f27223")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({ name: "Mike"}).count().then((count) => {
    console.log(`Todos count: ${count}`);
    console.log(JSON.stringify(count, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // client.close();
});