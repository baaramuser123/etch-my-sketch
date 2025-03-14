{
const container = document.querySelector(".container");
const eraseButton = document.querySelector("button");
let items = document.querySelectorAll(".item");
createBoard();



container.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("item")) e.target.style.backgroundColor = "red";
})

eraseButton.addEventListener("click", eraseBoard);



function createBoard () {
    for (let i=0; i < 256; i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        container.appendChild(item);
    }
    items = document.querySelectorAll(".item");
}

function eraseBoard () {
    items.forEach((element) => element.remove());
    // container.childNodes.forEach((element) => element.remove());

    createBoard();
}


};