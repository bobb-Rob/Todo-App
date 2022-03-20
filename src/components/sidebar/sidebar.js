import './sidebar.css'

const sidebar = (function(){

    const innerSidebar = function(){
        const sidebar = document.createElement('div');
        sidebar.id = 'inner-sidebar';
        sidebar.innerHTML = `
        <button class='add-new-task-btn' > 
            <svg name='plus-btn' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            <p>New</p>
        </button>
        <div class='side-item' >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>
            <div>
                <p>Task Box</p>
                <p>3</p>
            </div>
        </div>
        <div class='side-item' >
            <svg id='today-date'  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="28" height="28" viewBox="0 0 24 24"><path d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3M8 5C6.34 5 5 6.34 5 8V16C5 17.66 6.34 19 8 19H16C17.66 19 19 17.66 19 16V8C19 6.34 17.66 5 16 5H8Z" /></svg>
            <div>
                <p>Today</p>
                <p>4</p>
            </div>
        </div>
        <div class='side-item' >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M14,14H7V16H14M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M17,10H7V12H17V10Z" /></svg>
            <div>
                <p>Due in 7 Days</p>
                <p>14</p>
            </div>
        </div>
        <div class='side-item' >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" /></svg>
            <div>
                <p>Recent work</p>
                <p>12</p>
            </div>
        </div> 

        ${_sideBarDropDownBtn('Projects')} 
        <div class='projects-dropdown-container' >        
            <p>Game Development App Projects
            My programming note on LinkedList function, mercy ayigbe is owing me. 200million USD
            My programming note on LinkedList function, mercy ayigbe is owing me. 200million USD
            
            </p>          
        </div>  

        ${_sideBarDropDownBtn('Notes')}             
        <div class='notes-dropdown-container' >        
            <p>My programming note on LinkedList function, mercy ayigbe is owing me. 200million USD
            My programming note on LinkedList function, mercy ayigbe is owing me. 200million USD
            
            </p>          
        </div>
        `;

        return sidebar;
    }

    const _sideBarDropDownBtn = function(btnName){
        let dropdown = `
            <div class='dropdown-btn' >
                <div>                
                    <svg class='right-arrow-btn dropdown-arrow' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    <svg class='down-arrow-btn open dropdown-arrow' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </div>
                <p>${btnName}</p>
            </div>
        `;
        return dropdown;
    }

        class dropDownbtn{
            constructor(name, elements){
                this.name = name;
                this.elements = elements;
            }


        }




    return { innerSidebar}
})();


export default sidebar;