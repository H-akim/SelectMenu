var selectfield = document.getElementById("selectfield");
var select = document.getElementById("select");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon")

for(option of options){
    option.onclick = function(){
        select.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}

selectfield.onclick = function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}


