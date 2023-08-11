const score = document.getElementById('score');
let winner;

document.addEventListener('keyup', (event) => {
  if (winner) {
    return;
  }

  if (event.key === 'a') {
    const td = document.querySelector("#player1-race td.active");
    const nextTd = td.nextElementSibling;

    td.classList.remove('active');
    nextTd.classList.add('active');


    if (nextTd.classList.contains('finish')) {
      winner = "Player 1";
    }
  }

  if (event.key === 'l') {
    const td = document.querySelector("#player2-race td.active");
    const nextTd = td.nextElementSibling;

    td.classList.remove('active');
    nextTd.classList.add('active');


    if (nextTd.classList.contains('finish')) {
      winner = "Player 2";
    }
  }

  if (winner) {
    score.innerText = `${winner} Wins!!!`;
  }



});
