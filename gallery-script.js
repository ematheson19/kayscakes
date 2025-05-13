// Image Gallery Script for Kays Cakes 
// Original Author : Evan Matheson

let slideIndex = 1;
let autoSlideInterval;
let isHovered = false;
let isClicked = false;
let slideChanging = false;

// Swiping tracking
let touchStartX = 0;
let touchEndX = 0;

// Every image in the "images" file
const images = [
    { src: "images/img1.jpeg", caption: "Decorated Easter Sugar Cookies" },
    { src: "images/img2.jpeg", caption: "White Buttercream Drip Cake with Sprinkles" },
    { src: "images/img3.jpeg", caption: "Peanut Butter Chocolate Cupcakes" },
    { src: "images/img4.jpeg", caption: "White Cake with Buttercream Frosting" },
    { src: "images/img5.jpeg", caption: "Vanilla Cupcakes with Raspberry Filling" },
    { src: "images/img6.jpeg", caption: "Floral Buttercream Piped Cupcakes" },
    { src: "images/img7.jpeg", caption: "Strawberry Shortcake and Oreo Cupcakes" },
    { src: "images/img8.jpeg", caption: "Juicy Watermelon Cupcake With Buttercream" },
    { src: "images/img9.jpeg", caption: "Classic Chocolate Cupcakes with Buttercream Frosting" },
    { src: "images/img10.jpeg", caption: "Chocolate-Covered Strawberry Cupcake" },
    { src: "images/img11.jpeg", caption: "Vanilla Drip Cake with Buttercream Frosting" },
    { src: "images/img12.jpeg", caption: "Reese’s Peanut Butter Chocolate Cake" },
    { src: "images/img13.jpeg", caption: "Cookies and Cream Cake Pops" },
    { src: "images/img14.jpeg", caption: "Cookie Monster Themed Cupcake" },
    { src: "images/img15.jpeg", caption: "Toasty S’mores Cupcakes" },
    { src: "images/img16.jpeg", caption: "Mini Raspberry Chocolate Cake" },
    { src: "images/img17.jpeg", caption: "Banana Cream Pie-Inspired Cupcakes" },
    { src: "images/img18.jpeg", caption: "Carrot Cake Cupcakes" },
    { src: "images/img19.jpeg", caption: "Strawberry Chocolate Cake" },
    { src: "images/img20.jpeg", caption: "Chocolate Covered Strawberries" },
    { src: "images/img21.jpeg", caption: "Cupcake Variety Pack" },
    { src: "images/img22.jpeg", caption: "Graduation Cupcakes" },
    { src: "images/img23.jpeg", caption: "Unicorn Palace Cake" }
];


const container = document.getElementById("slideshow-container");

images.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.className = "mySlides";
    slide.innerHTML = `
        <div class="numbertext">${index + 1} / ${images.length}</div>
        <img src="${img.src}" style="width:100%" alt="${img.caption}">
        <div class="text">${img.caption}</div>
    `;
    container.appendChild(slide);
});

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    if (slideChanging) return;
    slideChanging = true;

    showSlides(slideIndex += n);

    setTimeout(() => {
        slideChanging = false;
    }, 400); // 400ms delay prevents double-firing
}

// Show slides function
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Autoplay slides
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (!isHovered && !isClicked) {
            plusSlides(1);
        }
    }, 3000); // Changes slides every 3 seconds
}

// Stop the auto sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Pause the slide on hover  or click
container.addEventListener("mouseenter", () => {
    isHovered = true;
    stopAutoSlide();
});

// This function restarts the auto slide when a hover ends if there is no click
container.addEventListener("mouseleave", () => {
    isHovered = false;
    startAutoSlide();
});

// This function stops the auto slide when the div is clicked
container.addEventListener("click", () => {
    isClicked = true;
    stopAutoSlide();
});

container.addEventListener("touchstart", handleTouchStart, { passive: true });
container.addEventListener("touchmove", handleTouchMove, { passive: true });
container.addEventListener("touchend", handleTouchEnd, { passive: true });

// Tracking for the starting position of the touch
function handleTouchStart(e) {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
}

// Tracking for the ending position of the touch
function handleTouchMove(e) {
    const touch = e.touches[0];
    touchEndX = touch.clientX;
}

// Handles the swipe action for the touch distance 
function handleTouchEnd() {
    if (touchStartX - touchEndX > 50) {
        plusSlides(1);
    } else if (touchEndX - touchStartX > 50) {
        plusSlides(-1);
    }
}

// Event Listeners Added For Mobile Purposes
document.querySelector(".prev").addEventListener("touchend", (e) => {
    e.preventDefault();
    e.stopPropagation();
    plusSlides(-1);
}, { passive: false });

document.querySelector(".next").addEventListener("touchend", (e) => {
    e.preventDefault();
    e.stopPropagation();
    plusSlides(1);
}, { passive: false });


startAutoSlide();