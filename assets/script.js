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
        title: 'What is 4x4',
        answers: [
            {
                answer: 8,
                correct: false
            },
            {
                answer: 16,
                correct: true
            },
            {
                answer: 20,
                correct: false
            }
        ]
    },
]

var currentQuestion = 0

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
            <li><button id="answerOne">${question.answers[0].answer}</button></li>
            <li><button id="answerTwo">${question.answers[1].answer}</button></li>
            <li><button id="answerThree">${question.answers[2].answer}</button></li>
        </ui>
    `    

    document
    .getElementById('answerTwo')
    .addEventListener(
        'click',
        function() {
            currentQuestion++
            questionPage(questions[currentQuestion])
        },
    ),
    document
    .getElementById('answerTwo')
    .addEventListener(
        'click',
        function() {
            currentQuestion++
            questionPage(questions[currentQuestion])
        }
    )
}

homePage()