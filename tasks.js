
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  const argument = text.split(" ")[0].trim();
  const answer = text.split(" ")[1]
  // console.log(argument)
  const task = text.substring(3).trim()
  // console.log(task)
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(argument === 'hello'){
    hello(text.replace("\n", ""));
  }
  else if(text.trim() === 'list'){
    listTasks()
  }
  else if(text === 'help\n'){
    help();
  }
  else if(argument == 'add'){
    add(task)
  }
  else if(argument == 'remove'){
    remove(answer);
  }
  else{
    unknownCommand(text);
  }
} 


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

const tasks = ["Do sport","Buy coffee","Meet a friend"];

function listTasks() {
  for (let i=0; i<tasks.length; i++){
    console.log(i+1 + "[ ] " + tasks[i]);
  }
}
function remove(index){
  if (!index){
    tasks.pop()
  }
  else {
    tasks.splice(+index-1,1)
  }
}

function add(task){
  tasks.push(task)
} 


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text + "!")
}


/**
 * Asking for help
 * 
 */
function help(){
  console.log('hello : to start the app, \n quit or exit :to quit the app \n hello + your text \n add ( ) to add a new task to the list \n remove : to remove the last task \n remove(number of task) to remove the number of the task')
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Ali Artach")
