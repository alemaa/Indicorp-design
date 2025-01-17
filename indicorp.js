let menu=document.getElementById("menu-mobile");


function myFunction(){
    if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
        menu.style.flexDirection="column";
      }
}

