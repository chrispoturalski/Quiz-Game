//utility function to select an element based on tag
var qs = function (tag) {
    return document.querySelector(tag);
};

// pulled variables from HTML
var timerEl = qs(".timer-count");  

var quiz = document.getElementById("quiz");
var questions = [
    {
        title: 'What is 3x3',
        answers: [
            {
                answer: 6,
                correct: false
            },
            {
                answer: 9,
                correct: true
            },
            {
                answer: 27,
                correct: false
            }
        ]
    },
    {
        title: 'Where does HTML stand for?',
        answers: [
            {
                answer: 'Hyperlinks and Markup Language',
                correct: false
            },
            {
                answer: 'Hypertext Markup Language',
                correct: true
            },
            {
                answer: 'Hometool Markup Language',
                correct: false
            }
        ]
    },
    {
        title: 'What is 2x2x2',
        answers: [
            {
                answer: 8,
                correct: true
            },
            {
                answer: 6,
                correct: false
            },
            {
                answer: 16,
                correct: false
            }
        ]
    },
    {
        title: 'Where is UCI located?',
        answers: [
            {
                answer: 'Irvine',
                correct: true
            },
            {
                answer: 'Inglewood',
                correct: false
            },
            {
                answer: 'Idyllwild',
                correct: false
            }
        ]
    },
    {
        title: 'What is 4x4',
        answers: [
            {
                answer: 8,
                correct: false
            },
            {
                answer: 20,
                correct: false
            },
            {
                answer: 16,
                correct: true
            }
        ]
    },
]

//game logic variables
var currentQuestion = 0;
var wins = 0;
var losses = 0;
var gameRunning = false;
var timeLeft = 60;

function homePage () {
    quiz.innerHTML = `
    <p>
        My Quiz
    </p> 
    <button id="startQuiz">Start Quiz</button>
    `

    document.getElementById('startQuiz')
    .addEventListener(
        'click', 
        function() {
        startTimer();
        questionPage(questions[currentQuestion])
    })
}

var startTimer = function () {
    interval = setInterval(function (){
        // this gets called every second
        timeLeft--;
        timerEl.textContent = timeLeft;
        gameRunning = true;
        //if time reaches 0, game over
        if (timeLeft === 0) {
            alert('Time is Up!!!');
            gameOver();
            gameOverScreen();
        }
    }, 100);
};

function questionPage(question) {
    quiz.innerHTML = `
        <p>
            ${question.title}
        </p>
        <ui>
            <li><button data-correct="${question.answers[0].correct}" id="answerOne">${question.answers[0].answer}</button></li>
            <li><button data-correct="${question.answers[1].correct}" id="answerTwo">${question.answers[1].answer}</button></li>
            <li><button data-correct="${question.answers[2].correct}" id="answerThree">${question.answers[2].answer}</button></li>
        </ui>
    `    

    document
    .getElementById('answerTwo')
    .addEventListener(
        'click',
        function(event) {
            // if event.currentTarget.dataset.correct === 'true'
            // ok
            // else take 10 seconds off of my total time
            if (event.currentTarget.dataset.correct === 'true') {
                alert('nice work!')
            } else {
                alert ('false!')
                // take off some time
            }
            currentQuestion++
            questionPage(questions[currentQuestion])
        }
    )
    document
    .getElementById('answerOne')
    .addEventListener(
        'click',
        function(event) {
            // if event.currentTarget.dataset.correct === 'true'
            // ok
            // else take 10 seconds off of my total time
            if (event.currentTarget.dataset.correct === 'true') {
                alert('nice work!')
            } else {
                alert ('false!')
                // take off some time
            }
            currentQuestion++
            questionPage(questions[currentQuestion])
        }
    )
    //Final question
    document
    .getElementById('answerThree')
    .addEventListener(
        'click',
        function(event) {
            // if event.currentTarget.dataset.correct === 'true'
            // ok
            // else take 10 seconds off of my total time
            if (event.currentTarget.dataset.correct === 'true') {
                alert('nice work!')
            } else {
                alert ('false!')
                // take off some time
            }
            currentQuestion++
            if (questions.length === currentQuestion) {
                gameOverScreen();
            }
            questionPage(questions[currentQuestion])
        }
    )
}

var gameOver = function () {
    clearInterval(interval);
    gameRunning = false;
    

}

function gameOverScreen() {
    quiz.innerHTML = `
    <h1>Highscore!</h1>
    <h2>Enter your initials below</h2>
    <form>
        <input placeholder="name" id="name">
        <button id="submit-score">Submit Score</button>
    </form>
    `
}


homePage()



//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN the game is over
//THEN I can save my initials and my score