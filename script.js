const icons = document.querySelectorAll(".section-1-1icons>i");
let index = 1;
setInterval(() => {
  index++;
  let icon = document.querySelector(".section-1-1icons>.icon");
  icon.classList.remove("icon");
  console.log(icons.length, index);
  if (index > icons.length) {
    icons[0].classList.add("icon");
    index = 1;
  } else {
    icon.nextElementSibling.classList.add("icon");
  }
}, 2500);

// show the menu or hide it
document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".navBar").classList.toggle("test");
});
