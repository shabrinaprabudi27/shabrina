const checkNav = document.querySelector(".check-nav");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

checkNav.addEventListener("change", function(){
    if(this.checked){
    navMenu.classList.add("active");
    }else{
        navMenu.classList.remove("active");
    }
});

