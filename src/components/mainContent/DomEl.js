import navBar from "../navbar/navbar";
import sidebar from "../sidebar/sidebar";
import { Section } from "./section";
import addTask from "./addTaskForm";

const DomElement = (()=>{

    function createDomEl(){        
        navBar.innerNavbar();
        sidebar.innerSidebar();
        // addTask.addTaskForm(appContainer,'fixed-add-task-form');
        Section.createSection();
    }

    return {createDomEl}

})();


export default DomElement;