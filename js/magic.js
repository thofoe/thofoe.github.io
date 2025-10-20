// Sticky header functionality
window.addEventListener("scroll", function () {
const stickyHeader = document.getElementById("sticky-header");
if (window.scrollY > 100) {
    stickyHeader.classList.add("visible");
} else {
    stickyHeader.classList.remove("visible");
}
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
    window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjusted for header height
        behavior: "smooth",
    });
    }
});
});