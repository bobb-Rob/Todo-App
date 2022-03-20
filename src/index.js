import navBar from './components/navbar/navbar';
import sidebar from './components/sidebar/sidebar';
import dropDownMethod from './components/sidebar/dropdown';
import todoAppLogic from './components/mainContent/main';
import './app.css'


const todoApp = (function(){
    const navContainer = document.getElementById('nav-container');   
    const sideMenu = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    

    navContainer.appendChild(navBar.innerNavbar());
    sideMenu.appendChild(sidebar.innerSidebar());


    // lOGIC

    dropDownMethod.dropdownFn();
    todoAppLogic.executeLogic();

})();