let tabs = document.querySelectorAll(".tabs ul li");
let paragraphs = document.querySelectorAll(".tabs .content div");

tabs.forEach((tab) => {
  tab.addEventListener("click", removeActive);
  tab.addEventListener("click", managePara);
});

function removeActive() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  this.classList.add("active");
}
function managePara() {
  paragraphs.forEach((para) => {
    para.style.display = "none";
  });
  document.querySelector(`.tabs .content ${this.dataset.tab}`).style.display =
    "block";
}
