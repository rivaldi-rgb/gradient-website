window.addEventListener('scroll', () => {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
