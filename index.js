const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const db = mongoose.connect("mongodb://localhost:27017/todocli");

const todo = require('./models/todo');

const addTask = (task) => {
    todo.create(task).then(task => {
        console.info("added succesfully");
        db.close();
    });
}

const findTask = (title) => {
<<<<<<< HEAD
    const search = new RegExp(title,'i');
    todo.find({title:search})
    .then(title =>{
=======
    console.log(title);
    todo.find(title)
    .then(task =>{
>>>>>>> 661fe9cc5aa9c723bed0ef9ce34debde3372ca00
        console.info(task);
        db.close();
    });
}

const list = () => {
        todo.find()
    .then(data =>{
        console.info(data);
        db.close();

    });
}

const delTask = (srno) => {
    todo.remove(srno)
    .then(srno=>{
        console.info("deleted");
        db.close();
    });
}

module.exports = {
    addTask,
    findTask,
    delTask,
    list
}