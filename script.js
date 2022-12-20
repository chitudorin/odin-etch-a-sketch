container = document.querySelector("div.container");

for (i = 0; i <= 14; i++) {
  row = createRow();
  for (j = 0; j <= 14; j++) {
    row.appendChild(createElement());
  }
  container.appendChild(row);
}

function createElement() {
  let element = document.createElement("div");
  element.classList.add("element");
  return element;
}

function createRow() {
  let row = document.createElement("div");
  row.classList.add("row");
  return row;
}

function resetPlayArea() {
  let elements = document.querySelectorAll("div.element");
  elements.forEach((element) => {
    element.style.backgroundColor = "red";
  });
}

document.querySelector("button").addEventListener("click", resetPlayArea);

elements = document.querySelectorAll("div.element");

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "black";
  });
});
