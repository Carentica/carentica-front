const btnMenu = document.getElementById("btnMenu");
const svgMenu = document.querySelectorAll("#btnMenu svg");
const test = "test";

const mobileMenu = document.getElementById("mobileMenu");
btnMenu.addEventListener('click', (e) => {
    for (let child of svgMenu) {
        child.classList.toggle("block");
        child.classList.toggle("hidden");
    }
    mobileMenu.classList.toggle("hidden");
})
