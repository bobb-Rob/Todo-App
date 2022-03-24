import './addTask.css'


const addTask = (() => {
    
    
    // Add task form
    const addTaskForm = (destination) => {
        const _addTaskForm = document.createElement('div');
        _addTaskForm.classList.add('add-task-form');
        _addTaskForm.innerHTML = `
                <div>      
                    <div>
                        <input type="text" id="task-title" placeholder="Enter task e.g., Visit the doctor on thur 4pm." > <br>
                        <input type="text" id="task-description"  placeholder="Task description" name="description" >
                        
                    </div>  
                    <div>
                        <div>                    
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.42L11.59 21.42A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M13 20L4 11V4H11L20 13M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5Z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3M7,7.25V11.5C7,11.5 9,10 11,10C13,10 14,12 16,12C18,12 18,11 18,11V7.5C18,7.5 17,8 16,8C14,8 13,6 11,6C9,6 7,7.25 7,7.25Z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M9.29,3.25L5.16,6.72L4,5.34L8.14,1.87L9.29,3.25M22,5.35L20.84,6.73L16.7,3.25L17.86,1.87L22,5.35M13,4A8,8 0 0,1 21,12A8,8 0 0,1 13,20A8,8 0 0,1 5,12A8,8 0 0,1 13,4M13,6A6,6 0 0,0 7,12A6,6 0 0,0 13,18A6,6 0 0,0 19,12A6,6 0 0,0 13,6M12,7.5H13.5V12.03L16.72,13.5L16.1,14.86L12,13V7.5M1,14C1,11.5 2.13,9.3 3.91,7.83C3.33,9.1 3,10.5 3,12L3.06,13.13L3,14C3,16.28 4.27,18.26 6.14,19.28C7.44,20.5 9.07,21.39 10.89,21.78C10.28,21.92 9.65,22 9,22A8,8 0 0,1 1,14Z" /></svg>
                        </div>
                        <div>
                            <button class="createTaskBtn" >Add task</button>
                            <button type="submit" id="addtask-form-cancel" >Cancel</button>
                        </div>    
                    </div>     
                </div>     
        `;

        destination.append(_addTaskForm);
    }




    return [addTaskForm]
})();
 

export default addTask;