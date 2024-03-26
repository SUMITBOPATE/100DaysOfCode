 let todo_input =document.querySelector('.todo-input');
 let button=document.getElementById("button");
//  let task_container =document.getElementsByClassName("todo-task");
 let taskContainer = document.getElementById("task-container"); // Correctly select the container
let alert=document.getElementById('alert');
// let deleteItem=document.getElementById("delete-task");  
function addTask(){
    let taskText=todo_input.value;
    if(taskText==''){
        alert.innerText="No task Added"
    }
   if(taskText.trim() !== ''){
    let newTask=document.createElement('div');
    newTask.textContent=taskText;
    newTask.className='todo-task';

      // Create a delete button for each task
      let deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button'; 
    let icon = document.createElement('i');
        icon.className = 'fa fa-trash'; 
      
        // deleteButton.appendChild(icon)
        icon.addEventListener('click', deleteTask); 
        deleteButton.appendChild(icon)
    newTask.appendChild(icon); 
    taskContainer.appendChild(newTask);
    todo_input.value='';
    console.log("Task added:", taskText);
   
   } 
 
 console.log("added")
}



  button.addEventListener("click",addTask);

function deleteTask(event){
    // Prevent the default action of the button click
    event.preventDefault();

    // Remove the parent task element from the DOM
    let taskToDelete = event.target.parentElement;
    taskContainer.removeChild(taskToDelete);
}