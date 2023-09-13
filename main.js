const onClick = document.querySelector(".entry__site");

function click() {
  onClick.classList.add("hover");
}

onClick.addEventListener("click", click);
