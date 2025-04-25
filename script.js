// Scroll Down Button Animation
const scrollButton = document.querySelector('.scroll-down-btn');
scrollButton.addEventListener('mouseover', () => {
    scrollButton.style.transform = 'translateY(-5px)';
});
scrollButton.addEventListener('mouseout', () => {
    scrollButton.style.transform = 'translateY(0)';
});
