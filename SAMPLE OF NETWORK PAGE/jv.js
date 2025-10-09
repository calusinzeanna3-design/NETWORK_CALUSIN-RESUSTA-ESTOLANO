
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a"); 

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); 
      const sectionId = link.getAttribute("href").substring(1); 
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
