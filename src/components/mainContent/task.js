import proactiveApp from './businessLayer';
import presentationLayer from './presentation';
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




    // Create other task btns such as, delete btn, edit, enter due date etc
    const createTaskBtns = () => {
        const div = document.createElement('div');
        div.classList.add('task-on-hover-content');
        div.innerHTML = `
            <svg name='re-order' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" /></svg> 
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M14,14H7V16H14M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M17,10H7V12H17V10Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>
            `;        
        return div;
    }


function createTask(){
    const todoContainer = document.querySelector('.todo-container');       
    const taskTitle = document.getElementById('task-title');        
    const taskDescription = document.getElementById('task-description');
    // Get the value of the input and remove whitespace
    const text = taskTitle.value.trim();
    const description = taskDescription.value.trim();
    if (text !== '' && description !== '') { // Check if the input is an empty string 
        const taskWrapper = document.createElement('div'); // task container
        taskWrapper.classList.add('task-wrapper');    
        const checkBoxWrap = document.createElement('div');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBoxWrap.appendChild(checkBox);       

        const titleWrap = document.createElement('div');
        const taskTitleEl = document.createElement('p'); //Task title
        taskTitleEl.innerText = text;
        const taskDescEl = document.createElement('p'); //task description
        taskDescEl.innerText = description;
        titleWrap.appendChild(taskTitleEl);
        titleWrap.appendChild(taskDescEl);
       
        const deleteBtnWrap = document.createElement('div');
        deleteBtnWrap.innerHTML = `
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"/></svg>
        `;    
       
        taskWrapper.appendChild(checkBoxWrap);
        taskWrapper.appendChild(titleWrap);
        taskWrapper.appendChild(deleteBtnWrap);      
        taskWrapper.appendChild(createTaskBtns());
        todoContainer.appendChild(taskWrapper);


        let newTask = new Task(text, description.value);
        proactiveApp.addTask(proactiveApp.todoBox, newTask);
        console.log(proactiveApp.todoBox);
        console.log(newTask);
        presentationLayer.boxCount(); //   For each item added reset the count on sidebar

       taskTitle.value = '';
       taskDescription.value = '';  
       document.querySelector('.add-task-form').style.display = 'none';       
    }

    const emptyInputWarningMsg = document.createElement('span');
    emptyInputWarningMsg.classList.add('empty-input-warning')
    emptyInputWarningMsg.textContent = 'Please input a task or click cancel';
    document.querySelector('.add-task-form').appendChild(emptyInputWarningMsg);
    setTimeout(function(){
        emptyInputWarningMsg.remove();
    }, 3000);
}


export {Task, createTask}