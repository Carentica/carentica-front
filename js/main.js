const btnMenu = document.getElementById("btnMenu");
const svgMenu = document.querySelectorAll("#btnMenu svg");

const mobileMenu = document.getElementById("mobile-menu");
btnMenu.addEventListener('click', (e) => {
    for (let child of svgMenu) {
        child.classList.toggle("block");
        child.classList.toggle("hidden");
    }
    mobileMenu.classList.toggle("hidden");
})

const profilMenu = document.getElementById("profilMenu");
const profilList = document.getElementById("profilList");
profilMenu.addEventListener('click', (e) => {
    
    profilList.classList.toggle("hidden");
})

