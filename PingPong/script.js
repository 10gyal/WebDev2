const player1 = {
    score: 0,
    button:  document.querySelector('#p1Up'),
    display: document.querySelector('#p1Display')
}

const player2 = {
    score: 0,
    button:  document.querySelector('#p2Up'),
    display: document.querySelector('#p2Display')
}

const select = document.querySelector("#gameOn");
const reset = document.querySelector("#reset");

let gameScore = 7;
let isGameOver = false;

function updateScore(player, opp) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score >= gameScore && (player.score - opp.score) >= 2) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opp.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opp.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


player1.button.addEventListener('click', function() {
    updateScore(player1, player2);
})
player2.button.addEventListener('click', function() {
    updateScore(player2, player1);
})

select.addEventListener('change', function() {
    gameScore = parseInt(this.value);
    resetFunc();
})

reset.addEventListener('click', resetFunc);

function resetFunc() {
    isGameOver = false;
    for(let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}