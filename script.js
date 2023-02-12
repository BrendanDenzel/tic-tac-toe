const squares = document.querySelectorAll('.square');
const resetButton = document.querySelector('#resetButton');
let currentPlayer = "X";

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function (e) {
    if (e.target.textContent === '') {
      e.target.textContent = currentPlayer;
      if (checkForWinner()) {
        setTimeout(function () {
          alert(currentPlayer + " wins!");
        }, 1);
        return;
      }
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
}

resetButton.addEventListener('click', function () {
  currentPlayer = "X";
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
});

function checkForWinner() {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
      return true;
    }
  }
  return false;
}
