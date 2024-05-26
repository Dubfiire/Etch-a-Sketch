document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("gridContainer");
  const resetButton = document.getElementById("resetButton");

  function createGrid(squaresPerSide) {
    gridContainer.innerHTML = "";
    const squareSize = 960 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("gridSquare");
      gridSquare.style.width = `${squareSize}px`;
      gridSquare.style.height = `${squareSize}px`;
      gridSquare.style.backgroundColor = "rgb(0, 102, 204)";
      gridSquare.dataset.darkness = 0;
      gridSquare.addEventListener("mouseover", changeColor);
      gridContainer.appendChild(gridSquare);
    }
  }

  function changeColor(event) {
    const square = event.target;
    const currentColor = window.getComputedStyle(square).backgroundColor;
    let [r, g, b] = currentColor.match(/\d+/g).map(Number);

    const darkness = parseInt(square.dataset.darkness) + 1;
    square.dataset.darkness = darkness;

    if (darkness <= 10) {
      const randomColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;
      [r, g, b] = randomColor.match(/\d+/g).map(Number);
      r = Math.max(0, r - darkness * 25.5);
      g = Math.max(0, g - darkness * 25.5);
      b = Math.max(0, b - darkness * 25.5);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
      square.style.backgroundColor = "rgb(0, 0, 0";
    }
  }

  resetButton.addEventListener("click", () => {
    let squaresPerSide = parseInt(
      prompt("Enter the number of squares per side (between 1 and 100:")
    );
    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
      alert("Please enter a valid number between 1 and 100");
      return;
    }
    createGrid(squaresPerSide);
  });

  createGrid(16);
});
