const button = document.querySelector("#registr");
const backdrop = document.querySelector(".backdrop");
const popup = document.querySelector(".popup");

button.addEventListener("click", function() {
  popup.classList.add("open");
});
backdrop.addEventListener("click", function() {
  popup.classList.remove("open");
});
