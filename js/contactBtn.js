const button = document.querySelector(".contact-btn");
const container = document.querySelector(".container");

button.addEventListener("click", function() {
  container.classList.toggle("flip");
});
