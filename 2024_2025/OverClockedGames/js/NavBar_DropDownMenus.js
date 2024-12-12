//booleans to toggle the status if the Dropdownmenus are hidden
var TDRPGDropdownHidden = true;
var ProjectSDropdownHidden = true;

//Function to show or hide the specific dropdown menus
function ProjectSDropDownFunc() {
    document.getElementById("ID_ProjectSDropdown").classList.toggle("show");
    ProjectSDropdownHidden = false;
}

function ProjectSDropDownFuncHide() {
    document.getElementById("ID_ProjectSDropdown").classList.toggle("show");
    ProjectSDropdownHidden = true;
}

function TDRPGDropDownFunc() {
    document.getElementById("ID_TDRPGDropdown").classList.toggle("show");
    TDRPGDropdownHidden = false;
}

function TDRPGDropDownFuncHide() {
  document.getElementById("ID_TDRPGDropdown").classList.toggle("show");
  TDRPGDropdownHidden = true;
}

//Function to hide all menus that are still active
function HideAllDropdown() {
  if (ProjectSDropdownHidden == false) {
    ProjectSDropDownFuncHide();
  }
  
  if (TDRPGDropdownHidden == false) {
    TDRPGDropDownFuncHide();
  }
    
}

//Shows the dropdown menus content when hovering
window.onmouseenter = function(event) {
    if (!event.target.matches('.ProjectSdropbtn')) {
    var myDropdown = document.getElementById("ID_ProjectSDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }

    if (!event.target.matches('.TDRPGdropbtn')) {
      var myDropdown = document.getElementById("ID_TDRPGDropdown");
      var tempArrow = document.getElementById("TDRPGArrow");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
    }

}

//Hides the dropdown menus content when unhovering
window.onmouseleave = function(event) {
    if (!event.target.matches('.ProjectSDropdown')) {
    var myDropdown = document.getElementById("ID_ProjectSDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }

    if (!event.target.matches('.TDRPGDropdown')) {
      var myDropdown = document.getElementById("ID_TDRPGDropdown");
        if (myDropdown.classList.contains('show')) {
          myDropdown.classList.remove('show');
        }
    }
}