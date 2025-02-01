const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
let quizData = [];

// Fetch quiz data from the API
async function fetchQuizData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        quizData = data.questions;
        console.log(quizData);
    } catch (error) {
        console.error('Error fetching quiz data:', error);
    }
}

// Start the quiz
function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
}

// Display the current question
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.description;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.description;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(option.is_correct));
        optionsElement.appendChild(button);
    });

    nextBtn.classList.add('hiddenDisplay');
}

// Handle answer selection
function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;

    }

    // Highlight correct/incorrect answers
    const buttons = optionsElement.querySelectorAll('.option-btn');
    buttons.forEach((button, index) => {
        const option = quizData[currentQuestionIndex].options[index];
        button.disabled = true;
        button.classList.add(option.is_correct ? 'correct' : 'incorrect');
    });

    nextBtn.classList.remove('hiddenDisplay');
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    scoreElement.textContent = `${score} / ${quizData.length}`;
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Initialize quiz data
fetchQuizData();