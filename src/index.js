import navBar from './components/navbar/navbar';
import sidebar from './components/sidebar/sidebar';


import './app.css'

const todoApp = (function(){
    const navContainer = document.getElementById('nav-container')
    console.log(navContainer);
    const sideMenu = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');


    navContainer.appendChild(navBar.innerNavbar());
    sideMenu.appendChild(sidebar.innerSidebar());

})();