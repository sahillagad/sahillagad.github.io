var navBar,menuBtn,menu,menuHidden;

menuBtn = document.getElementById("menuBtn");
navBar = document.getElementById("navbar");
menu = document.getElementById("menu");
menuHidden = true;

window.onscroll = function(){
    if(document.body.scrollTop || document.documentElement.scrollTop > 50){
        navBar.style.background = "black";
    }else{
        navBar.style.background = "transparent";
    }
}

menuBtn.onclick = function(){
    if(menuHidden){
        menu.style.width = "100%";
        menuHidden = false;
    }else{
        menu.style.width = "0%";
        menuHidden = true;
    }
}