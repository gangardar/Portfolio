document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("header ul li a");
  const sections = document.querySelectorAll("section");
  const blogSection = document.getElementById('blogs');

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop -80; // adjust if needed
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
        console.log(current);
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });

  blogSection.addEventListener('click', () => {
    console.log('clicked');
    window.location.href =   '../pages/myanmarEducation.html'
  })
});
