import proactiveApp from './businessLayer';
import dropDownMethod from '../sidebar/dropdown';
import { Task, createTask } from './task';
import { Section } from './section';



import './mainContent.css'



const eventlogic = (() => {

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


    const addSectionEvent = () => {
        
        
            // const addSectionDisplayBtn = document.querySelectorAll(".toggle-add-section-form");
            // for(let i = 0; i < addSectionDisplayBtn.length; i++){
            //     addSectionDisplayBtn[i].addEventListener("click", function(e){           
            //         document.querySelector('.add-task-form').style.display = 'block';
            //         document.querySelector('#task-title').focus();
            //     });
            // }            
             
            // const addTaskFormCancelBtn = document.getElementById('addtask-form-cancel');
            // addTaskFormCancelBtn.addEventListener('click', function(){
            //     document.querySelector('.add-task-form').style.display = 'none';
            // });
      



      document.querySelector('.todo-container').addEventListener('click', (e) => {

        if(e.target.classList.contains('toggle-add-section-form')){
            e.target.nextElementSibling.style.display = 'block';
        }

        if(e.target.classList.contains('cancel-add-section')){
            e.target.parentNode.parentNode.style.display = 'none';          
        }

        
        if(e.target.classList.contains('add-section-btn')){
            let node = document.getElementById(e.target.parentNode.parentNode.parentNode.id);
            console.log(e.target.parentNode.parentNode.parentNode)
            if(node.nextSibling){
                console.log(node.nextSibling)
                Section.createSection("Dum", node.nextSibling);
            }
            Section.createSection("Dum");


            console.log(e.target.parentNode.id)
        }
          
      });
        
    }

    
    const boxCount = function(){
        // Task box count display
        document.getElementById('taskBoxCount').textContent = proactiveApp.todoBox.length;
        // Today box count dislay at the side bar
        document.getElementById('todayBoxCount').textContent = proactiveApp.todayBox.length;
        // Today box count display
    }





    function attachAllEvent(){
        // Attached event listeners to dropdown btn with classs name dropdownBtn & icons with class name open 
        dropDownMethod.dropdownFn();
        // Display add task form & close it
        displayAddTaskForm();
        // createTaskEvent();
        addSectionEvent();
        boxCount(); 
    }   



    return {attachAllEvent, boxCount,  addSectionEvent}


})()



export default eventlogic;