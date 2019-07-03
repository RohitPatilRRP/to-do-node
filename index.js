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
    //const search = new RegExp(title,'i');
    todo.find(title)
    .then(task =>{
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