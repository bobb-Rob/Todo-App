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
            let form = e.target.nextElementSibling     
            form.style.display = 'block';  
            form.childNodes[1].focus();  
        }
       
        if(e.target.classList.contains('cancel-add-section')){
            let sectionNameInput = e.target.parentNode.parentNode.childNodes[1];           
            e.target.parentNode.parentNode.style.display = 'none'; 
            sectionNameInput.value = '';
        }
 
       
        if(e.target.classList.contains('add-section-btn')){
        //    console.log(e.target.parentNode.previousElementSibling)
           const sectionName = e.target.parentNode.previousElementSibling;

           let newSectionName = sectionName.value;                 
            if(newSectionName){
                let currentSection = document.getElementById(e.target.parentNode.parentNode.parentNode.id);           
                if(currentSection.nextSibling){    
                    // if there is a next section, insert the new section before the previous one    
                    Section.createSection(newSectionName, currentSection.nextSibling);
                    sectionName.parentNode.style.display = 'none';
                    sectionName.value = '';  
                }else{
                    Section.createSection(newSectionName);
                    sectionName.parentNode.style.display = 'none';
                    sectionName.value = '';  
                }
                  
            }
            sectionName.focus();        
        }

        if(e.target.classList.contains('inline-add-task-btn')){
            console.log(e.target.parentNode.childNodes);
            let taskContainers = e.target.parentNode.childNodes[3];
            console.log(taskContainers)
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