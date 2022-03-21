


    const TodoApp = function(){
        this.todoBox = [];
        this.todayBox = [];
        this.dueIn7days = [];
        this.notes = [];
        this.projects = [];

       this.addTask = function(destination, task){
            destination.push(task);
        }
    }


    let proactiveApp = new TodoApp();  
    



export default proactiveApp;