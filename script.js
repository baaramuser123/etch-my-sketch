{
const container = document.querySelector(".container");
const eraseButton = document.querySelector("#erase");
const qualityButton = document.querySelector('#quality');
let items = document.querySelectorAll(".item");
let boxesLength = 16;

createBoard();



container.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("item")) e.target.style.backgroundColor = "red";
})

document.addEventListener("click", (event) => {
    if (event.target.id == "erase"){
        eraseBoard();
    }
    else if (event.target.id == "quality"){
        boxesLength = prompt("Enter a number between 10 and 100");
        eraseBoard();
        let root = document.querySelector(':root');
        root.style.setProperty('--rowCount', boxesLength);
    }
})

eraseButton.addEventListener("click", eraseBoard);



function createBoard () {
    for (let i=0; i < boxesLength ** 2; i++) {
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