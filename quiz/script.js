const quizData = [
    {
        question: 'What is the capital of S.Korea?',
        a: 'Seoul',
        b: 'Tokyo',
        c: 'Beijing',
        correct: 'a' 
    }, {
        question: 'Who is Mohamad Ali?',
        a: 'Poet',
        b: 'MMA Fighter',
        c: "Boxer",
        correct: 'c'
    }, {
        question: "When did WW2 end?",
        a: '1944',
        b: '1945',
        c: '1946',
        correct: 'b'
    }, {
        question: 'How many NBA championships does Steph Curry have?',
        a: '2',
        b: '3',
        c: '4',
        correct: 'c'
    }, {
        question: 'Who is the CEO of Apple?',
        a: "Steve Jobs",
        b: 'Elon Musk',
        c: "Tim Cook",
        correct: 'c'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    resetCheck();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function resetCheck() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            //TODO: show results
            quiz.innerHTML = `
                <h2>Your score for the quiz: ${score}/${quizData.length}.</h2> 

                <button onclick= "location.reload()">Reload</>
            `;
        }
    } 
});