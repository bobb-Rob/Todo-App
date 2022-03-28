import proactiveApp from './businessLayer';
import dropDownMethod from '../sidebar/dropdown';
import addTask from './addTaskForm';
import { Task, createTask } from './task';
import { Section } from './section';
import './mainContent.css'



const eventlogic = (() => {

    function displayAddTaskForm(){
        const appContainer = document.getElementById('app-container');
        const addBtn = document.querySelectorAll(".add-new-task-btn");
        for(let i = 0; i < addBtn.length; i++){
            addBtn[i].addEventListener("click", function(e){ 

                addTask.addTaskForm(appContainer,'fixed-add-task-form');    
                document.querySelector('#task-title').focus();
                // Attach the cancel event
                const addTaskFormCancelBtn = document.querySelector('.addtask-form-cancel');
                addTaskFormCancelBtn.addEventListener('click', function(e){
                    document.querySelector('.fixed-add-task-form').remove();
                });

            });
        }            
         
        // 
    }
    

    const addSectionEvent = () => {  
      document.querySelector('.todo-container').addEventListener('click', (e) => {
      
        // Display add section form
        if(e.target.classList.contains('toggle-add-section-form')){ 
            let form = e.target.nextElementSibling     
            form.style.display = 'block';  
            form.childNodes[1].focus();  
        }
       // cancel Display add section form
        if(e.target.classList.contains('cancel-add-section')){
            let sectionNameInput = e.target.parentNode.parentNode.childNodes[1];           
            e.target.parentNode.parentNode.style.display = 'none'; 
            sectionNameInput.value = '';
        }
 
        //Add Section btn event - Injects section in the right position    
        if(e.target.classList.contains('add-section-btn')){        
           const sectionName = e.target.parentNode.previousElementSibling;
           let newSectionName = sectionName.value;                 
            if(newSectionName){
                let currentSection = document.getElementById(e.target.parentNode.parentNode.parentNode.parentNode.id);           
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

        // inline add task form created
        if(e.target.classList.contains('inline-add-task-btn')){
            const div = document.createElement('div');
            div.className = 'inline-add-task-form-wrapper';
            addTask.addTaskForm(div, 'inline-add-task-form');  

           const inlineForm =  e.target.previousElementSibling;          
            if(inlineForm.classList.contains('inline-add-task-form-wrapper') && inlineForm.children[0].style.display === 'block'){
                  return;
            }else{
                e.target.parentNode.insertBefore(div, e.target);
                div.children[0].style.display = 'block';
                e.target.previousElementSibling.children[0].children[0].children[0].children[0].focus();            }      
        }

        // Cancel btn event on the inline add task form
        if(e.target.classList.contains('addtask-form-cancel')){          
           let inlineAddForm = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
           inlineAddForm.remove();          
        }

        // 
        if(e.target.classList.contains('section-threeDot-more')){          
            let moreIcon = e.target
         }
       

        // inline Add task btn event to add task to the DOM;
        if(e.target.classList.contains('createTaskBtn')){

            let inlineAddForm = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
            let taskContainerId = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.id;            
            createTask(document.getElementById(taskContainerId));
            inlineAddForm.remove();
        }

        // Delete task from the DOM and Store in Proactive todo Array
        if(e.target.classList.contains('task-delete-icon')){
            const wrapper = e.target.parentNode.parentNode;
            const taskId = wrapper.id;
            console.log(wrapper);

            // Delete from Array
            proactiveApp.deleteItem(taskId);
            wrapper.remove(); 
            boxCount();            
            console.log(proactiveApp.todoBox)
            
        }

        // Mark task as Complete, move to completed task in last 30days
        if(e.target.classList.contains('todo-tick')){
           let id = e.target.parentNode.parentNode.id;
           proactiveApp.toggleDone(id);
           console.log(proactiveApp.todoBox)
        }


        if(e.target.id === 'edit-task'){
            const editBtn = e.target;
            const taskId = e.target.parentNode.parentNode.id;
            let index = proactiveApp.todoBox.findIndex(item => item.id === taskId)
            const task = proactiveApp.todoBox[index];
            console.log(task);            

            // Hide other content of the taskWrapper container
            const taskWrapper = e.target.parentNode.parentNode;
            const taskWrapChildren = Array.from(taskWrapper.children);
            taskWrapChildren.forEach(item => {
                item.style.display = "none";                
                if(item.classList.contains('task-on-hover-content')){
                    item.onmouseover = function(){
                        item.style.opacity = 0;
                    }
                }
            });

            // inject edit form
            addTask.addTaskForm(taskWrapper, 'edit-task-form');
            const taskTitle = document.getElementById('task-title');        
            const taskDescription = document.getElementById('task-description');
            taskTitle.value = task.title;
            taskDescription.value = task.description;
            const saveBtn = document.querySelector('.createTaskBtn');
            console.log(saveBtn)
            saveBtn.textContent = 'Save';
            saveBtn.classList.add('edit-task-save-btn');
            saveBtn.classList.remove('createTaskBtn');

            saveBtn.addEventListener('click', function(){
                task.title = taskTitle.value.trim();
                task.description = taskDescription.value.trim();
                console.log(editBtn.parentNode.previousElementSibling.previousElementSibling.children[0])
                editBtn.parentNode.previousElementSibling.previousElementSibling.children[0].textContent = task.title
                editBtn.parentNode.previousElementSibling.previousElementSibling.children[1].textContent = task.description
                console.log(task)
                document.querySelector('.edit-task-form').remove();
                taskWrapChildren.forEach(item => {
                    item.style.display = "block";                
                    if(item.classList.contains('task-on-hover-content')){
                        item.onmouseover = function(){
                            item.style.opacity = 0.9;
                        }
                        item.onmouseout = function(){
                            item.style.opacity = 0;
                        }
                    }
                });
            })

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
        // insert add task form & remove it
        displayAddTaskForm();  
         //Add Task section events  
        addSectionEvent();
        boxCount(); 
    }   



    return {attachAllEvent, boxCount,  addSectionEvent}


})()



export default eventlogic;