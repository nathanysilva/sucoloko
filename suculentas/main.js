let slideIndex = 0;

showSlides();  // Call the function to start the slideshow

function showSlides() {
    const slides = document.getElementsByClassName("mySlides"); // Get all elements with the class "mySlides"

    // Hide all slides by default
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++; // Increment the slide index

    if (slideIndex > slides.length) { // If index exceeds the number of slides, reset to 1
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block"; 

    setTimeout(showSlides, 2000); // Change the image every 2 seconds
}

// Function to change slides manually
function plusSlides(n) {
    slideIndex += n; // Adjust the slide index
    if (slideIndex > slides.length) {
        slideIndex = 1; // Loop back to the first slide if the index exceeds the number of slides
    } else if (slideIndex < 1) {
        slideIndex = slides.length; // If index is less than 1, go to the last slide
    }
    showSlides(); // Show the updated slide
}
