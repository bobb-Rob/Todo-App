import uniqid from 'uniqid';
import eventlogic from './Event';
import './section.css'

export class Section{
    constructor(sectionName){
        this.sectionName = sectionName;
        this.id = uniqid();
    }

    static createSection(Name, target){
        const todoContainer = document.querySelector('.todo-container');
        const newSection = new Section(Name);
        console.log(newSection);
       
        const section = document.createElement('section');
        section.classList.add('section')
        section.id = newSection.id;
        section.innerHTML = `
        <div class='sec-name-container' >
        <button class="section-header" >
          <div>
            <svg name="chevronDown" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            <svg name="chevronRight" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
          </div>
          <p>${newSection.sectionName ? newSection.sectionName : 'default'}</p>
        </button>
        <svg name="threeDot-more" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>
      </div>
      
      <div id="${newSection.id}-task-container" class='task-container' ></div>
      <button class='inline-add-task-btn' >
        <svg name="plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
        Add Task
      </button> <br>
      <button class='toggle-add-section-form' >
        <svg name="plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
        Add Section
      </button>
      <div class="name-section-form" >
        <input type="text" class='section-name-input' >
        <div>
            <button class='add-section-btn' >Add Section</button>
            <button class='cancel-add-section'>Cancel</button>
        </div>
      </div>
        `;

        if(target === undefined){
            todoContainer.append(section);
        }

        todoContainer.insertBefore(section, target);

       
       
    }

    // AddSection
   
    



    // Delete Section


    // edit section
}


