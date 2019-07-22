const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require("./../server/models/user");

// let id = "5c0d6adc56740b9c22346742";

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log("Id not found");
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

let id = "5c0d53fdcc75f9b0278c0316";

User.findById(id).then((user) => {
  if (!user) {
    console.log("user not found");
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));