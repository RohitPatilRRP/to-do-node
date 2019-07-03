const program = require('commander');
const { prompt } = require('inquirer');

const {
    addTask,
    findTask,
    delTask
}=require('./index');


const questions = [
  {
    type: 'input',
  name: 'title',
  message: 'task title'
  },
  {
    type: 'input',
    name: 'description',
    message: 'task description'
  }
];

program
 .version('1.0.0')

 //program
  //.command('add <srno> <title> <descp>')
 // .alias('a')
  //.description('Add a task')
  //.action((srno,title,descp)=>{
   // addTask({srno,title,descp});

 // });
 program
  .command('add')
  .alias('a')
  .description('add a task')
  .action(() => {
    prompt(questions).then(answers => addTask(answers));
  });

  program
  .command('find <title>')
  .alias('f')
  .description('find a task')
  .action((title)=>{
    findTask({title});

  });

  program
  .command('remove <srno>')
  .alias('r')
  .description('remove a task')
  .action((srno)=>{
    delTask({srno});
  });

program.parse(process.argv);