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
            const todoArr = [...this.todoBox];
          this.todoBox = this.todoBox.filter(item => {              
            return item.id !== id
           })
        }

        this.toggleDone = function(id){
            const index = this.todoBox.findIndex(item => item.id === id);
            this.todoBox[index].completed = !this.todoBox[index].completed;
        }




// Code Logic to filter task with todays date
        this.todayBox = [];


//Code logic to filter task due in 7days 
        this.dueIn7days = [];

    }




    const proactiveApp = new TodoApp(); 

  

export default proactiveApp;