const researchBtn = document.getElementById("researchBtn");
const researchPopup = document.getElementById("researchPopup");

researchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  researchPopup.style.display =
    researchPopup.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!researchBtn.contains(e.target) && !researchPopup.contains(e.target)) {
    researchPopup.style.display = "none";
  }
});


const menu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

