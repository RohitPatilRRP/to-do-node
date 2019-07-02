var program = require('commander');
const {
    addTask,
    findTask
}=require('./index');
program
 .version('1.0.0')

 program
  .command('add <srno> <title> <descp>')
  .alias('a')
  .description('Add a task')
  .action((srno,title,descp)=>{
    addTask({srno,title,descp});

  });

  program
  .command('find <title>')
  .alias('f')
  .description('find a task')
  .action((title)=>{
    findTask({title});

  });

program.parse(process.argv);