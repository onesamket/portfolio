

// Get the navbar element
var navbar = document.querySelector('header');

// Set the initial scroll position to 0
var scrollPosition = 0;
// Add scroll event listener to the window
window.addEventListener('scroll', function() {
    // Calculate the new scroll position
    var newScrollPosition = window.scrollY;
    alert()

    // Check if scrolling up or down
    if (scrollPosition < newScrollPosition) {
        navbar.classList.add('.Header')

        // Scrolling down, hide the navbar
    } else {
        // Scrolling up, show the navbar
        navbar.classList.remove('.Header')

    }

    // Update the scroll position
    scrollPosition = newScrollPosition;
});
