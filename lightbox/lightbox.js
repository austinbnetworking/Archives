let currentSlide = 0; // Current Slide
let images = []; // Images Array

// Images List
images[0] = 'temp.jpg';
images[1] = 'temp2.jpg';
images[2] = 'temp3.jpg';
images[3] = 'temp4.jpg';
images[4] = 'temp5.jpg';
images[5] = 'temp6.jpg';

// Opens Lightbox
function openModal() {
    document.querySelector(".lightboxContainer").style.display = "flex";
}

// Closes Lightbox
function closeModal() {
    document.querySelector(".lightboxContainer").style.display = "none";
}

// Sets Current Image to Lightbox when clicked
// Returns the Current Slide Index
function changeImage(n) {
    document.activeImage.src = images[n];
    currentSlide = n;
    return currentSlide;
}

// Cycles Through Images
// n is either 1 (next slide) or -1 (previous slide)
function nextSlide(n) {

    if (currentSlide < 1 && n == -1) {
        //IF at first slide AND selecting previous slide
        currentSlide = images.length - 1;
        document.activeImage.src = images[currentSlide];
        return currentSlide;

    } else if (currentSlide < images.length - 1 && currentSlide >= 0 && n == 1) {
        //IF at any slide besides the last AND going up
        currentSlide = currentSlide + 1;
        document.activeImage.src = images[currentSlide];
        return currentSlide;

    } else if (currentSlide == images.length - 1 && n == 1) {
        //IF at final slide last AND going up
        currentSlide = 0;
        document.activeImage.src = images[currentSlide];
        return currentSlide;

    } else {
        //Anything else (going down AND not at first slide)
        currentSlide = currentSlide - 1;
        document.activeImage.src = images[currentSlide];
        return currentSlide;

    }
}