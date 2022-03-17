

const dropDownMethod = (function(){

  function dropdownFn(){
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;    
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {      
       this.classList.toggle("active");
        
       var downicons = document.getElementsByClassName('down-arrow-btn');
       var righticons = document.getElementsByClassName('right-arrow-btn');
        var downIconsArr = Array.from(downicons);
        var rightIconsArr = Array.from(righticons);
       
        console.log(downIconsArr);

        
        var dropdownContent =  this.nextElementSibling;

        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
          downIconsArr.forEach(icon => icon.style.display = "none" );
          rightIconsArr.forEach(icon => icon.style.display = "block" );  
        } else {
          downIconsArr.forEach(icon => icon.style.display = "block" );
          rightIconsArr.forEach(icon => icon.style.display = "none" );         
          dropdownContent.style.display = "block";
        }
      });
    }
  
  }

    return {dropdownFn}
})()

export default dropDownMethod;

