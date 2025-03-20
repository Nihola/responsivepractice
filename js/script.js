document.addEventListener("DOMContentLoaded", function () {
    const myCarousel = document.querySelector("#carouselExampleIndicators");

    // Ensure Bootstrap Carousel is initialized properly
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: false, // Disable auto-slide
        wrap: true // Allow infinite loop when clicking arrows
    });

    // Ensure clicks work correctly
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        carousel.prev();
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        carousel.next();
    });

    // Ensure clicking dots moves to the correct slide
    document.querySelectorAll(".carousel-indicators button").forEach((dot, index) => {
        dot.addEventListener("click", function () {
            carousel.to(index);
        });
    });
});

function updateLabel(input) {
    const label = document.querySelector("label[for='fileUpload']");
    if (input.files.length > 0) {
        label.textContent = input.files[0].name;
    } else {
        label.textContent = "Choose a File";
    }
}

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     centeredSlides: true,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// var appendNumber = 4;
// var prependNumber = 1;
// document
//     .querySelector(".prepend-2-slides")
//     .addEventListener("click", function (e) {
//         e.preventDefault();
//         swiper.prependSlide([
//             '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//             '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//         ]);
//     });
// document
//     .querySelector(".prepend-slide")
//     .addEventListener("click", function (e) {
//         e.preventDefault();
//         swiper.prependSlide(
//             '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//         );
//     });
// document
//     .querySelector(".append-slide")
//     .addEventListener("click", function (e) {
//         e.preventDefault();
//         swiper.appendSlide(
//             '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
//         );
//     });
// document
//     .querySelector(".append-2-slides")
//     .addEventListener("click", function (e) {
//         e.preventDefault();
//         swiper.appendSlide([
//             '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//             '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//         ]);
//     });

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Show 4 slides at a time
        spaceBetween: 20, // Space between slides
        loop: true, // Infinite scrolling
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
 