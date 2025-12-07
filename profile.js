const toggleBtn = document.getElementById("toggle-glitch-btn");
const hero = document.querySelector(".hero");

toggleBtn.addEventListener("click", () => {
hero.classList.toggle("glitch");

if (hero.classList.contains("glitch")) {
    toggleBtn.textContent = "I LOVE YOU!";
} else {
    toggleBtn.textContent = "<3";
}
});