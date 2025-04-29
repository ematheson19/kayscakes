// Image Gallery Script for Kays Cakes 
// Original Author : Evan Matheson

let slideIndex = 1;

// Every image in the "images" file
const images = [
    { src: "images/img1.jpeg", caption: "Decorated Easter Sugar Cookies" },
    { src: "images/img2.jpeg", caption: "White Buttercream Drip Cake with Sprinkles"},
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
    { src: "images/img18.jpeg", caption: "Carrot Cake Cupcakes" }
];


const container = document.getElementById("slideshow-container");

images.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.className = "mySlides";
    slide.innerHTML = `
        <div class="numbertext">${index + 1} / ${images.length}</div>
        <img src="${img.src}" style="width:100%">
        <div class="text">${img.caption}</div>
    `;
    container.appendChild(slide);
});

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
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
