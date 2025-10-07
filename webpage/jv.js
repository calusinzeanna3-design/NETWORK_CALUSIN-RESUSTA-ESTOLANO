// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a"); // select navbar links

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // Prevent default jump
      const sectionId = link.getAttribute("data-section"); // get target
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // For mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
