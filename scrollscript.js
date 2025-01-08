window.onload = function(){
    document.getElementById("hero").classList.add('scrolled')
}


document.addEventListener("scroll", function() {

    const wisdomContent = document.querySelector(".wisdom-section .wisdom-content");
    const wisdomImage = document.querySelector(".wisdom-image");

    const scrollPosition = window.scrollY + window.innerHeight;

    // Check if the user has scrolled to the wisdom section content and apply/remove the scrolled class
    if (scrollPosition > wisdomContent.offsetTop + wisdomContent.offsetHeight / 3) {
        wisdomContent.classList.add("scrolled");
        wisdomImage.classList.add("scrolled");
    } else {
        wisdomContent.classList.remove("scrolled");
        wisdomImage.classList.remove("scrolled");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.roadmap-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});