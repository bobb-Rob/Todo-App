import './navbar.css'
import menuIcon from './menu.svg'
import homeIcon from '../icons/home.svg'
import searchIcon from '../icons/magnify.svg'
import plusIcon from '../icons/plus.svg'
import bellIcon from '../icons/bell.svg'

const navBar = (function(){
    
    const innerNavbar = function(){
        const innerNav = document.createElement('div');
        innerNav.id = 'navbar';
        innerNav.innerHTML = `
            <img src="${menuIcon}" alt="menu-icon" >
            <img src="${homeIcon}" alt="home-icon">
            <div>
                <img src="${searchIcon}" alt="search icon">
                <input type="search" placeholder="Search" >
            </div>
            <img src="${plusIcon}" alt="plus-icon">
            <img src="${bellIcon}" alt="bell-icon">
            <div class='avatar' ></div>        
            `;

        return innerNav;
    }

    return {innerNavbar}

})();


export default navBar;