 let todo_input =document.querySelector('.todo-input');
 let button=document.getElementById("button");
//  let task_container =document.getElementsByClassName("todo-task");
 let taskContainer = document.getElementById("task-container"); // Correctly select the container
let alert=document.getElementById('alert');
// let deleteItem=document.getElementById("delete-task");  
function addTask(){
    let taskText=todo_input.value;
    
   if(taskText.trim() !== ''){
    let newTask=document.createElement('div');
    newTask.textContent=taskText;
    newTask.className='todo-task';
     // raduo button
            // Create radio buttons for complete/incomplete
            let completeRadio = document.createElement('input');
            completeRadio.className="input"
            completeRadio.type = 'radio';
            completeRadio.name = 'taskStatus';
            completeRadio.value = 'complete';
            completeRadio.addEventListener('change', function() {
              newTask.style.textDecoration = 'line-through'; 
              newTask.style.color = '#808080'; 

            });
         
    
            completeRadio.style.order = -1;
            newTask.appendChild(completeRadio);
        // newTask.appendChild(incompleteRadio);

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

}else{
  alert.innerText="no task added"
}
}




 button.addEventListener("click",addTask);


function deleteTask(event){
    
    event.preventDefault();

     let taskToDelete = event.target.parentElement;
    taskContainer.removeChild(taskToDelete);
}
function changeStatus(){
  
    newTask.style.textDecoration = 'line-through'; // Mark task as complete
}
