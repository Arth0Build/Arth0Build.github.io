
document.addEventListener('DOMContentLoaded', function () {

    var image = document.getElementById('profileImage');
    image.style.opacity = 0;
    image.style.transform = 'translateX(-100%)';
    setTimeout(function () {
        image.classList.add('animated-image');
    }, 500);
});