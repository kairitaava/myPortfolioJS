const btnHamburger = document.querySelector(".hamburger");
const menuPanel = document.querySelector(".menu-panel");
const btnClose = document.querySelector(".close-button");
const menuLinks = document.querySelectorAll(".menu-panel a");
const frameImage = document.querySelector("#frame");
const images = ['2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];

let currentImageIndex = 0;

btnHamburger.addEventListener("click",()=>{
    menuPanel.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) {
        menuPanel.classList.remove("active");
    }
});

btnClose.addEventListener("click", () => {
    menuPanel.classList.remove("active");
});

menuLinks.forEach((link)=>{
    
    link.addEventListener("click", ()=> {
        menuPanel.classList.remove("active");
    });
})

frameImage.addEventListener("click", ()=> {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    frameImage.src = "images/" + images[currentImageIndex];
});