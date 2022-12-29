function createNewElement() {
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

function deletePlayArea() {
    document.querySelectorAll("div.element").forEach(e => e.remove());
    document.querySelectorAll("div.row").forEach(e => e.remove());
}

function promptPlayArea() {
    let n = prompt("How many pixels? (max 100)")
    deletePlayArea();
    generatePlayArea(n)
}

function generatePlayArea(n) {
    if (n > 100) n = 100;
    for (i = 0; i <= n; i++) {
        let row = createRow();
        for (j = 0; j <= n; j++) {
            row.appendChild(createNewElement());
        }
        container.appendChild(row);
    }

    elements = document.querySelectorAll("div.element");
    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "black";
        });
    });
}


container = document.querySelector("div.container");
document.querySelector("button.reset").addEventListener("click", resetPlayArea);
document.querySelector("button.change").addEventListener("click", promptPlayArea);
generatePlayArea(10);


