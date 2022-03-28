import DomElement from './components/mainContent/DomEl';
import eventlogic from './components/mainContent/Event';
import proactiveApp from './components/mainContent/businessLayer';
import { Section } from './components/mainContent/section';
import './app.css'


const todoApp = (function(){ 
        // Dom element injection
        DomElement.createDomEl();
    // UI display execution  
    eventlogic.attachAllEvent();

})();