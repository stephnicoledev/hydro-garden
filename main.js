"use strict";

const smGlass = document.querySelectorAll(".glass-sm");
const percentage = document.getElementById("percentage");
const remaining = document.getElementById("remaining");

updateLgGlass();
// calls the highlightGlasses function when a glass gets clicked on
smGlass.forEach((glass, i) => {
  glass.addEventListener("click", () => highlightGlasses(i));
});

// toggles the last filled glass of water
function highlightGlasses(i) {
  if (
    smGlass[i].classList.contains("full") &&
    !smGlass[i].nextElementSibling.classList.contains("full")
  ) {
    i--;
  }

  // fills the small glasses with water
  smGlass.forEach((glass, idx) => {
    if (idx <= i) {
      glass.classList.add("full");
    } else {
      glass.classList.remove("full");
    }
  });

  updateLgGlass();
}

function updateLgGlass() {
  // gets the amount of full glasses of water
  const fullGlass = document.querySelectorAll(".glass-sm.full").length;

  // get the total glasses
  const totalGlasses = smGlass.length;

  // hides the percentage if the glass is empty
  if (fullGlass === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullGlass / totalGlasses) * 330}px`; // check height of glass to make sure it's consistent
    percentage.innerText = `${(fullGlass / totalGlasses) * 100}%`;
  }
}
