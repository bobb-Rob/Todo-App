

const dropDownMethod = (function(){
  
  function dropdownFn(){
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;    
    for (i = 0; i < dropdown.length; i++) {     
      dropdown[i].addEventListener("click", function(e) {  

      // this class active casues the click button to change to an active color
       this.classList.toggle("active"); 
      // Selects all arrow icons on the buttons.    
      var dropDownArrowIcons = Array.from(document.getElementsByClassName('dropdown-arrow'));
    //  uses nextSibling DOM property to track the dropdown container
      var dropdownContent =  this.nextElementSibling;   
      
      
    // Checks if the drop down is block or not and switches between them.    
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";          
          
          dropDownArrowIcons.forEach(icon =>{  
            
            console.log(icon.parentElement.lastElementChild)         
            if(icon.parentElement === this.firstElementChild){             
              if(!icon.classList.contains('open')){              
                icon.style.display = "block"
              }else{
                icon.style.display = "none"
              }             
            }           
          });          

          // notesIcons.forEach(icon => icon.style.display = "block" );  
        } else {
          dropdownContent.style.display = "block";
          dropDownArrowIcons.forEach(icon =>{
            if(icon.parentElement === this.firstElementChild){             
              if(!icon.classList.contains('open')){               
                icon.style.display = "none"
              }else{
                icon.style.display = "block"
              }             
            }           
          });
        }
      });
    }
  
  }

    return {dropdownFn}
})()

export default dropDownMethod;

