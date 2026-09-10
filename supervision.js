const researchBtn = document.getElementById("researchBtn");
const researchPopup = document.getElementById("researchPopup");

researchBtn.addEventListener("click", e => {
  e.preventDefault();
  researchPopup.style.display =
    researchPopup.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", e => {
  if (!researchBtn.contains(e.target) && !researchPopup.contains(e.target)) {
    researchPopup.style.display = "none";
  }
});
