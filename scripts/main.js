/*
function aDropdown() {
    document.getElementById("dropdown-options").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbutton')) {
        
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
*/

function display(target) {
    var x = document.getElementById(target);
    var y = document.getElementById("bttndisp");
    
    if (x.style.display == "block") {
        x.style.display = "none";
        y.style.
    } else {
        x.style.display = "block";
    }
    
}