// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {

  // BUTTON 2: Dark Mode Toggle
  const darkModeBtn = document.getElementById("darkModeBtn");

  document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  });

});

