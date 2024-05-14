function calculateTotalSquares() {
  const rows = 16;
  const columns = 16;
  const totalSquares = rows * columns;
  return totalSquares;

  function createGrid() {
    const container = document.querySelector("container");
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement("div");
      container.appendChild(square);
    }
  }
}
const totalSquaresNeeded = calculateTotalSquares();
