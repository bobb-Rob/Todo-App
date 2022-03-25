import uniqid from 'uniqid';

class Task{
    constructor(title, description, dueDate = null, label = null, priority = 4, reminder = null){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.label = label;
        this.priority = priority;
        this.id = uniqid();
        this.completed = false;
    }
}



    const TodoApp = function(){
        this.todoBox = [];        
        this.notes = [];
        this.projects = [];
        this.sections = []


        this.newTask = function(text, description){
            return new Task(text, description);
        }

       this.addTask = function(destination, task){
            destination.push(task);
        }



        this.deleteItem = (id) =>{
            this.todoBox
        }

// Code Logic to filter task with todays date
        this.todayBox = [];


//Code logic to filter task due in 7days 
        this.dueIn7days = [];

    }




    const proactiveApp = new TodoApp(); 

export default proactiveApp;