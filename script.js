// script.js - Interactivity for Bryon Hoffpauir Resume Website

// Example: Toggle dark mode (optional feature)
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "Toggle Dark Mode";
  toggleBtn.style.margin = "20px auto";
  toggleBtn.style.display = "block";
  document.body.insertBefore(toggleBtn, document.body.firstChild);

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
