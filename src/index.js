import navBar from './components/navbar/navbar';

import './app.css'

const todoApp = (function(){
    const navContainer = document.getElementById('nav-container')
    console.log(navContainer);
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');


    navContainer.appendChild(navBar.innerNavbar())

})();