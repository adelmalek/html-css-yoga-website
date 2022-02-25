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