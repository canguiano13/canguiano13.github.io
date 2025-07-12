
//collapse/expand section
function toggleCollapsible(clickedButton, sectionId){
    //update text/title of button
    if(clickedButton.textContent === "\u2013"){
        clickedButton.textContent="+";
        clickedButton.title = "See more";
    } else{
        clickedButton.textContent="\u2013";
        clickedButton.title = "See less";
    }

    //get all children of desired section
    elementsToToggle = document.getElementById(sectionId).querySelectorAll("h4, p, ol");
    console.log(elementsToToggle);
    //hide/show children
    for (let i=0; i<elementsToToggle.length; i++){
        sectionToClose = elementsToToggle[i];
        sectionToClose.style.display = (sectionToClose.style.display === "none") ? "block":"none";
    }
}


//TODO fix implementation
function toggleMenu(){
    const nav = document.querySelector(".dropdown-nav");
    //change the height of the nav bar so that the links fit
    if (nav.style.height != "24vh"){
        nav.style.height = "24vh";
        nav.style.width = "100%";
    }else{
        nav.style.height = "12vh";
    }
    
    if (nav.style.display == "none"){
        nav.style.display == "block";
    }else{
        nav.style.display == "none";
    }
    const menu = document.querySelector(".dropdown-menu-links");
    const icon = document.querySelector(".dropdown-icon");
    
    if(menu.style.display === "inline-block"){
        menu.style.display = "none";
        menu.style.width = "100%";
    }else{
        menu.style.display = "block";
    }

}

