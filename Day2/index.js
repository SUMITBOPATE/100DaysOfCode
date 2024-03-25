 let todo_input =document.querySelector('.todo-input');
 let button=document.getElementById("button");
//  let task_container =document.getElementsByClassName("todo-task");
 let taskContainer = document.getElementById("task-container"); // Correctly select the container
let alert=document.getElementById('alert');
function addTask(){
    let taskText=todo_input.value;
    if(taskText==''){
        alert.innerText="No task Added"
    }
   if(taskText.trim() !== ''){
    let newTask=document.createElement('div');
    newTask.textContent=taskText;
    newTask.className='todo-task';
    taskContainer.appendChild(newTask);
    todo_input.value='';
    console.log("Task added:", taskText);
   
   } 
 
 console.log("added")
}
  button.addEventListener("click",addTask);