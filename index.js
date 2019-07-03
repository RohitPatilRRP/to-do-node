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
    const search = new RegExp(name,'i');
    todo.find({title:search})
    .then(title =>{
        console.info(task);
        db.close();
    });
}

<<<<<<< HEAD
const delTask = (srno) => {
    todo.remove(srno)
    .then(srno=>{
        console.info("deleted");
        db.close();
    });
}
=======

>>>>>>> 685477b310ebe04cc8c24bcb8528b833c9c49092

module.exports = {
    addTask,
    findTask,
    delTask
}