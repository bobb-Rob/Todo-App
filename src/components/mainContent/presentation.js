import proactiveApp from './businessLayer';
import dropDownMethod from '../sidebar/dropdown';
import { Task, createTask } from './task';
import uniqid from 'uniqid'


import './mainContent.css'



const presentationLayer = (() => {

    function displayAddTaskForm(){
        const addBtn = document.querySelectorAll(".add-new-task-btn");
        for(let i = 0; i < addBtn.length; i++){
            addBtn[i].addEventListener("click", function(e){           
                document.querySelector('.add-task-form').style.display = 'block';
                document.querySelector('#task-title').focus();
            });
        }            
         
        const addTaskFormCancelBtn = document.getElementById('addtask-form-cancel');
        addTaskFormCancelBtn.addEventListener('click', function(){
            document.querySelector('.add-task-form').style.display = 'none';
        });
    }
    

    const createTaskEvent = function(){
        const createTaskBtn = document.getElementById('createTaskBtn');
        createTaskBtn.addEventListener('click', createTask)
    }

    const boxCount = function(){
        // Task box count display
        document.getElementById('taskBoxCount').textContent = proactiveApp.todoBox.length;
        // Today box count dislay at the side bar
        document.getElementById('todayBoxCount').textContent = proactiveApp.todayBox.length;
        // Today box count display
    }

    function presentationLogic(){
        // Attached event listeners to dropdown btn with classs name dropdownBtn & icons with class name open 
        dropDownMethod.dropdownFn();
        // Display add task form & close it
        displayAddTaskForm();
        createTaskEvent();
        boxCount(); 
    }
   






    return {presentationLogic, boxCount}


})()



export default presentationLayer;