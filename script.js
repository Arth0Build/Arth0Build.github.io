
/* Add this style to your existing styles */


document.addEventListener('DOMContentLoaded', function () {
    // Get the image element
    var image = document.getElementById('profileImage');
    
    // Set the initial state
    image.style.opacity = 0;
    image.style.transform = 'translateX(-100%)';

    // Trigger the animation after a short delay
    setTimeout(function () {
        image.classList.add('animated-image');
    }, 500); // Adjust the delay as needed
});