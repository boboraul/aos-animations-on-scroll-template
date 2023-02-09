const collapseNav = document.getElementById('nav');
function toggleNavbar() {
    
    if (window.innerWidth < 992) {
    collapseNav.classList.add("hidden");
    collapseNav.classList.add("block");
    } else {
    collapseNav.classList.remove("hidden");
    collapseNav.classList.remove("block");
    }
} 

toggleNavbar();
window.addEventListener("resize", toggleNavbar); 
   