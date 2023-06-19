const lists = document.getElementsByTagName("li");

function activeLink() {
  for (const list of lists) {
    if (!list.classList.contains("head-nav")) {
      list.classList.remove("hovered");
    }
  }
  if (!this.classList.contains("head-nav")) {
    this.classList.add("hovered");
  }
}

for (const list of lists) {
  list.addEventListener("mouseover", () => {
    activeLink.call(list);
  });
}

let toggle = document.querySelector(".bx-menu");
let main = document.querySelector("main");

toggle.addEventListener("click", function () {
  main.classList.toggle("active");
});
