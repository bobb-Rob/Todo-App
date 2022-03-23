import DomElement from './components/mainContent/DomEl';
import presentationLayer from './components/mainContent/Event';
import proactiveApp from './components/mainContent/businessLayer';
import './app.css'


const todoApp = (function(){ 
        // Dom element injection
        DomElement.createDomEl();
    // UI display execution  
    presentationLayer.presentationLogic();

})();