// Sticky header functionality
window.addEventListener("scroll", function () {
const stickyHeader = document.getElementById("sticky-header");
if (window.scrollY > 300) {
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

// Contact form handling
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (e) {
e.preventDefault();

// Demo form submission
const name = document.getElementById("name").value;
formMessage.textContent = `Thank you, ${name}! This is a demo form. In a real website, your message would be sent.`;
formMessage.classList.remove("hidden", "text-red-300");
formMessage.classList.add(
    "mt-4",
    "p-3",
    "bg-white",
    "text-red-700",
    "rounded-md"
);

// Reset form
contactForm.reset();

// Hide message after 5 seconds
setTimeout(() => {
    formMessage.classList.add("hidden");
}, 5000);
});

(function () {
function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
    var d = b.createElement("script");
    d.innerHTML =
        "window.__CF$cv$params={r:'955aae01d723929f',t:'MTc1MDkxOTY3NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
    b.getElementsByTagName("head")[0].appendChild(d);
    }
}
if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
    document.addEventListener("DOMContentLoaded", c);
    else {
    var e = document.onreadystatechange || function () {};
    document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
        ((document.onreadystatechange = e), c());
    };
    }
}
})();