const p1 = document.querySelector('#p1Up');
const p2 = document.querySelector('#p2Up');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const select = document.querySelector("#gameOn");
const reset = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let gameScore = 7;
let isGameOver = false;

p1.addEventListener('click', function() {
    if(!isGameOver) {
        p1Score += 1;
        if(p1Score === gameScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1.disabled = true;
            p2.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})
p2.addEventListener('click', function() {
    if(!isGameOver) {
        p2Score += 1;
        if(p2Score === gameScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1.disabled = true;
            p2.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

select.addEventListener('change', function() {
    gameScore = parseInt(this.value);
    resetFunc();
})

reset.addEventListener('click', resetFunc);

function resetFunc() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1.disabled = false;
    p2.disabled = false;
}