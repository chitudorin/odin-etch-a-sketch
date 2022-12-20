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

elements = document.querySelectorAll("div.element");

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "black";
  });
});

// const container = document.createElement("div");
// container.classList.add("container");

// function creaza() {
//   for (let i = 0; i <= 15; i++) {
//     row = document.createElement("div");
//     row.classList.add("row");
//     row = document.querySelector("div.row");
//     for (let j = 0; j <= 15; j++) {
//       row.appendChild(document.createElement("div").classList.add("element"));
//     }
//     container.appendChild(row);
//   }
//   document.body.appendChild(container);
// }

// creaza();
