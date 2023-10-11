// JavaScript for toggling the menu and submenu under Tables
function toggleMenu(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var hamburger = document.querySelector(".hamburger");
    var menu = document.getElementById("menu");
    hamburger.classList.toggle("active"); // Toggle the 'active' class on the hamburger
    menu.classList.toggle("active"); // Toggle the 'active' class on the menu
}

    // JavaScript for automatic slideshow
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        setTimeout(showSlides, 3000); // Change image every 3 seconds (adjust as needed)
    }

    // Start the slideshow
    showSlides();