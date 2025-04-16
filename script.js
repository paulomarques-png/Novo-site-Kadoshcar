document.querySelector('input[type="checkbox"]').addEventListener('change', function() {
    const header = document.querySelector('header');
    if (this.checked) {
        header.style.transitionDelay = '0s'; // No delay when changing to the new color
        header.style.backgroundColor = 'rgb(190, 22, 123)';
    } else {
        header.style.transition = 'background-color 0.2s ease'; // Smooth transition for background color
        header.style.transitionDelay = '0.5s'; // Delay of 0.5s before resetting to default
        header.style.backgroundColor = ''; // Reset to default
    }
});