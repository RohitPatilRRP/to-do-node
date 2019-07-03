const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const db = mongoose.connect("mongodb://localhost:27017/todocli");

const todo = require('./models/todo');

const addTask = (task) => {
    todo.create(task).then(task => {
        console.info("added succesfully");
        mongoose.close();
    });
}

const findTask = (title) => {
    const search = new RegExp(title,'i');
    todo.find({title:search})
    .then(title =>{
        console.info(task);
        mongoose.close();
    });
}

const delTask = (srno) => {
    todo.remove(srno)
    .then(srno=>{
        console.info("deleted");
        mongoose.close();
    });
}

module.exports = {
    addTask,
    findTask,
    delTask
}