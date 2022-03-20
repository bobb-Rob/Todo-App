import './mainContent.css'

class Task{
    constructor(title, description, dueDate = null, label = null, priority = 4, reminder = null){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.label = label;
        this.priority = priority;
    }
}


class TodoList{
    static tasks = [];

    addTask = (task) =>{
       return TodoList.tasks = [...TodoList.tasks, task]
    }

}


const todoAppLogic = (() => {

    function displayAddTaskForm(){
        const addBtn = document.querySelector(".add-new-task-btn");
        const addTaskFormCancelBtn = document.getElementById('addtask-form-cancel');    
        addBtn.addEventListener("click", function(e){           
            document.querySelector('.add-task-form').style.display = 'block';
        });    
        addTaskFormCancelBtn.addEventListener('click', function(){
            document.querySelector('.add-task-form').style.display = 'none';
        });
    }


    function createTask(){
        const taskTitle = document.getElementById('task-title');
        const taskDescription = document.getElementById('task-description');
        const todoContainer = document.querySelector('.todo-container');

        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerText = taskTitle.value;
        const desc = document.createElement('p');
        desc.innerText = taskDescription.value;
        div.appendChild(h3)
        div.appendChild(desc);
        todoContainer.appendChild(div);

        let newTask = new Task(taskTitle.value, taskDescription.value)
       console.log(newTask);
       taskTitle.value = '';
       taskDescription.value = '';      
    }

    function createTaskEvent(){
        const createTaskBtn = document.getElementById('createTaskBtn');
        createTaskBtn.addEventListener('click', createTask)
    }


    function executeLogic(){
        // Display add task form & close it
        displayAddTaskForm();
        createTaskEvent();



    }
   






    return {executeLogic}


})()



export default todoAppLogic;