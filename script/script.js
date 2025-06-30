function toggleMenu(){
    const nav = document.querySelector(".dropdown-nav");
    if (nav.style.height != "auto"){
        nav.style.height = "auto";
    }else{
        nav.style.height = "12vh";
    }
    const menu = document.querySelector(".dropdown-menu-links");
    const icon = document.querySelector(".dropdown-icon");
    
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//document.addEventListener("DOMContentLoaded", toggleMenu());