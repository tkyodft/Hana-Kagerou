const menuBtn = document.getElementById("menu-btn");
const drawer = document.getElementById("drawer");
const backToTopButton = document.getElementById("back-to-top");

// Opens the drawer and updates accessibility state.
// inert=false makes the drawer's links focusable and visible to screen readers.
function openDrawer() {
    drawer.classList.add("is-open");
    menuBtn.setAttribute("aria-expanded", "true");
    drawer.inert = false;
}

// Closes the drawer and updates accessibility state.
// inert=true hides the drawer's links from keyboard navigation and screen readers
// even though the element remains in the DOM.
function closeDrawer() {
    drawer.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    drawer.inert = true;
}

function toggleDrawer() {
    const isOpen = drawer.classList.contains("is-open");
    isOpen ? closeDrawer() : openDrawer();
}

// Toggle the drawer when the hamburger button is clicked.
menuBtn.addEventListener("click", toggleDrawer);

// Close the drawer on Escape and return focus to the button that opened it,
// so keyboard users aren't left stranded.
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
        closeDrawer();
        menuBtn.focus();
    }
});

// Close the drawer when clicking anywhere outside of it or the menu button.
document.addEventListener("click", (e) => {
    if (drawer.classList.contains("is-open") && !drawer.contains(e.target) && !menuBtn.contains(e.target)) {
        closeDrawer();
    }
});

// Show the back-to-top button after scrolling down 200px.
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.classList.add("is-visible");
    } else {
        backToTopButton.classList.remove("is-visible");
    }
});

// Scroll smoothly back to the top when the button is clicked.
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
