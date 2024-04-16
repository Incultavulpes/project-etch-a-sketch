let squareQuantity = 16;

initializePixelGrid(squareQuantity);

const button = document.querySelector(".button");
button.addEventListener("click", function () {
    vanishPixelGrid();
    squareQuantity = prompt("Enter the number of squares on a side");
    if (squareQuantity > 100) {
        alert("Value exceeds grid constraints.");
        squareQuantity = 100;
    }
    initializePixelGrid(squareQuantity);
});

function initializePixelGrid (squareQuantity) {
    for (i = 1; i <= (squareQuantity*squareQuantity); i++) {
        const cont = document.querySelector(".cont");
        const square = document.createElement("div");
        square.style.height = `${940/squareQuantity}px`;
        square.style.width = `${940/squareQuantity}px`;
        square.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "black");
        cont.appendChild(square);
    }
}

function vanishPixelGrid () {
    const squaresTotal = document.querySelectorAll(".cont div");
    squaresTotal.forEach((e) => e.remove());
}
