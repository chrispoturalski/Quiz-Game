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

var currentQuestion = 0
var state = {
    correct: 0,
    incorrect: 0
}


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
        questionPage(questions[currentQuestion])
    })
}

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
                gameOverScreen()
            }
            questionPage(questions[currentQuestion])
        }
    )
}

function gameOverScreen() {
    quiz.innerHTML = `
    <h1>Nice Work!</h1>
    `
}


homePage()