/* NAVBAR CAROUSEL */

let carouselState = 0;

function moveCarousel() {
    let oldNode = document.querySelector(".carousel-img.d-none");
    oldNode.classList.remove("d-none");

    carouselState = carouselState === 1 ? 2 : 1;

    let newNode = document.querySelector(".carousel-img-" + carouselState);
    newNode.classList.add("d-none");
}

setInterval(moveCarousel, 6000);

/* OPEN NAVIGATION */

let openNav = document.querySelector(".js-open-navigation");
let navContainer = document.querySelector(".js-header-nav-container");
let headerMenu = document.querySelector(".js-header-menu");
let headerMenuLi = document.querySelector(".js-menu__li");
let headerMenuLiLink = document.querySelector(".js-header-li__link");
let headerButtons = document.querySelector(".js-header-buttons");

let menuExit = document.querySelector(".js-menu-exit");
let menuOpen = document.querySelector(".js-menu-open");

menuOpen.addEventListener("click", () => {
    menuOpen.classList.add("js-d-none");
    menuExit.classList.add("js-exit");
    openNav.classList.add("js-open-nav");
    navContainer.classList.add("js-nav-container");
    headerMenu.classList.add("js-menu");
    headerMenuLi.classList.add("js-menu__li");
    headerMenuLiLink.classList.add("js-m-li__link");
    headerButtons.classList.add("js-h-buttons");
});

menuExit.addEventListener("click", () => {
    menuOpen.classList.remove("js-d-none");
    menuExit.classList.remove("js-exit");
    openNav.classList.remove("js-open-nav");
    navContainer.classList.remove("js-nav-container");
    headerMenu.classList.remove("js-menu");
    headerMenuLi.classList.remove("js-menu__li");
    headerMenuLiLink.classList.remove("js-m-li__link");
    headerButtons.classList.remove("js-h-buttons");
});