const prompt = require("prompt-sync")();
const fs = require("fs");
const stringify = require("querystring");
const json = require("stream/consumers");

let task = [];
const data = fs.readFileSync("tasks.json", "utf8");
task = JSON.parse(data);
var task_inputted;


function save_task(){
    fs.writeFileSync("task.json", JSON.stringify(task, null, 2));
}

if (fs.existsSync("tasks.json")){
    console.log("tasks exist")
}else{
    task_inputted = "x";
}
while(task_inputted != "x"){
    task_inputted = prompt("what do you want to do?{see all the tasks(st), add tasks(at), remove tasks(rt), change deadline(cd), exit(x)}");
    if(task_inputted === "st"){
        console.log(task)
    }else if (task_inputted === "at"){
        var todo = prompt("what is the next task?");
        var deadline = prompt("when is the deadline?(please give time in this format hh:mm in 24 hrs)");
        task.push({
            name: todo,
            time_left: deadline
        });
        save_task()
        console.log(task)
    }else if (task_inputted === "rt"){
        console.log(task)
        var choosen_task = prompt("choose a task from above to remove.. ");
        delete task(choosen_task);
        save_task();
        console.log(task);
    }else if (task_inputted === "cd"){
        console.log(task);
        var choosen_task = prompt("choose a task from above to change deadline of.. ");
        var new_deadline = prompt("What is the new deadline... ");
        delete task(choosen_task);
        task.push({
            name: choosen_task,
            time_left: new_deadline
        });
        save_task();
    }else if (task_inputted === "x"){
        console.log("Exiting...");
        save_task();
    }
    else{
        console.log("Choose a valid response from above")
    }
    
}


