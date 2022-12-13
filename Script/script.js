document.getElementById("nav").onmouseover = function(event){
    let target = event.target;
    if(target.className == "menu-item"){
        let s = target.getElementsByClassName("submenu");
        exitmenu();
        s[0].style.display = "block";
    }
}
document.onmouseover = function(event){
    let target = event.target;
    if(target.className != "menu-item" && target.className != "submenu"){
        exitmenu();
    }
}
function exitmenu(){
    let nav = document.getElementById("nav");
    let submenu = document.getElementsByClassName("submenu");
    for(let i = 0; i < submenu.length; i++){
        submenu[i].style.display = "none";
    }
}