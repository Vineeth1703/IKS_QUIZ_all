document.addEventListener('DOMContentLoaded', () => {
    // --- QUIZ LOGIC (Only on quiz.html) ---
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return; // Stop if not on quiz page

    const loadingState = document.getElementById('loading-state');
    const quizContent = document.getElementById('quiz-content');

    const urlParams = new URLSearchParams(window.location.search);
    const unitId = urlParams.get('unit');
    
    if (!unitId || !quizData[unitId] || quizData[unitId].length === 0) {
        loadingState.innerHTML = '<h1 class="text-2xl p-8 text-red-500">Error: Quiz unit not found or no questions available. Please <a href="index.html" class="underline">go back</a> and select a unit.</h1>';
        return;
    }

    // Quiz state
    let questions = shuffleArray([...quizData[unitId]]); // Clone and shuffle questions
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let score = 0;
    let quizMode = 'practice'; // 'practice' (Study Mode) or 'test' (Practice Test)
    let isAnswered = false;

    // DOM Elements
    const quizTitle = document.getElementById('quiz-title');
    const progressBar = document.getElementById('progress-bar');
    const questionCounter = document.getElementById('question-counter');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    const nextButton = document.getElementById('next-button');
    const modeStudyBtn = document.getElementById('mode-study');
    const modeTestBtn = document.getElementById('mode-test');
    
    // Results Screen
    const resultsContainer = document.getElementById('results-container');
    const scoreText = document.getElementById('score-text');
    const scorePercentage = document.getElementById('score-percentage');
    const scoreSummary = document.getElementById('score-summary');
    const restartButton = document.getElementById('restart-button');
    const reviewButton = document.getElementById('review-button');

    // ** NEW REVIEW ELEMENTS **
    const scoreView = document.getElementById('score-view');
    const reviewView = document.getElementById('review-view');
    const reviewContentContainer = document.getElementById('review-content');
    const backToScoreButton = document.getElementById('back-to-score-button');


    // --- Utility Function: Shuffle Array (Fisher-Yates) ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- Function: Start Quiz ---
    function startQuiz() {
        quizTitle.textContent = `Unit ${unitId} Quiz`;
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        isAnswered = false;
        
        // Hide results, show quiz
        quizContainer.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        
        // Reset results views
        reviewView.classList.add('hidden');
        scoreView.classList.remove('hidden');
        
        // Hide loading, show content
        quizContent.classList.remove('hidden');
        loadingState.classList.add('hidden');
        
        loadQuestion();
    }

    // --- Function: Load Question ---
    function loadQuestion() {
        isAnswered = false;
        const question = questions[currentQuestionIndex];

        // Update progress
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;

        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        feedbackContainer.classList.add('hidden');

        // Randomize options
        const randomizedOptions = question.options.map((option, index) => ({ text: option, index: index }));
        shuffleArray(randomizedOptions);
        
        question.shuffledCorrectIndex = randomizedOptions.findIndex(opt => opt.index === question.correct);

        // Display options
        randomizedOptions.forEach((option, displayIndex) => {
            const optionElement = document.createElement('button');
            optionElement.className = 'option-btn';
            optionElement.textContent = option.text;
            optionElement.dataset.displayIndex = displayIndex;
            
            optionElement.addEventListener('click', () => selectOption(optionElement, displayIndex, question.shuffledCorrectIndex));
            optionsContainer.appendChild(optionElement);
        });

        nextButton.disabled = true;
        if (quizMode === 'practice') { // Study Mode
            nextButton.textContent = 'Next';
        } else { // Practice Test
            nextButton.textContent = (currentQuestionIndex === questions.length - 1) ? 'Finish Test' : 'Next';
        }
    }

    // --- Function: Select Option ---
    function selectOption(optionElement, displayIndex, shuffledCorrectIndex) {
        if (isAnswered) return;

        isAnswered = true;
        nextButton.disabled = false;
        
        const isCorrect = (displayIndex === shuffledCorrectIndex);
        const question = questions[currentQuestionIndex];
        
        userAnswers[currentQuestionIndex] = {
            question: question.question,
            options: Array.from(optionsContainer.children).map(btn => btn.textContent),
            selected: displayIndex,
            correct: shuffledCorrectIndex,
            explanation: question.explanation || 'No explanation provided.'
        };

        if (isCorrect) score++;

        if (quizMode === 'practice') { // "Study Mode"
            Array.from(optionsContainer.children).forEach((btn, index) => {
                btn.disabled = true;
                if (index === shuffledCorrectIndex) btn.classList.add('correct');
                else if (index === displayIndex) btn.classList.add('incorrect');
            });
            feedbackTitle.textContent = isCorrect ? 'Correct!' : 'Incorrect';
            feedbackTitle.className = isCorrect ? 'text-green-500 font-bold text-lg mb-2' : 'text-red-500 font-bold text-lg mb-2';
            feedbackExplanation.textContent = question.explanation || 'No explanation provided.';
            feedbackContainer.classList.remove('hidden');
        
        } else { // "Practice Test"
            Array.from(optionsContainer.children).forEach((btn, index) => {
                btn.disabled = true;
                if (index === displayIndex) btn.classList.add('selected');
            });
        }
    }

    // --- Function: Next/Finish Button ---
    nextButton.addEventListener('click', () => {
        if (!isAnswered) return;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) loadQuestion();
        else showResults();
    });

    // --- Function: Show Results ---
    function showResults() {
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        const percentage = Math.round((score / questions.length) * 100);
        scoreText.textContent = `${score}/${questions.length}`;
        scorePercentage.textContent = `${percentage}%`;
        scoreSummary.textContent = `You answered ${score} out of ${questions.length} questions correctly.`;
        
        // Ensure score view is visible and review view is hidden
        scoreView.classList.remove('hidden');
        reviewView.classList.add('hidden');
    }

    // --- Function: Restart Quiz ---
    restartButton.addEventListener('click', () => {
        questions = shuffleArray([...quizData[unitId]]); // Re-shuffle questions
        startQuiz();
    });

    // --- ** IMPROVED REVIEW FUNCTION ** ---
    reviewButton.addEventListener('click', () => {
        reviewContentContainer.innerHTML = ''; // Clear previous review
        userAnswers.forEach((answer, index) => {
            const isCorrect = (answer.selected === answer.correct);
            const reviewBlock = document.createElement('div');
            reviewBlock.className = 'review-block'; // Uses style from css/style.css
            
            reviewBlock.innerHTML = `
                <h3 class="font-semibold text-lg mb-2">${index + 1}. ${answer.question}</h3>
                <div class="grid grid-cols-1 gap-2 mb-3">
                    ${answer.options.map((opt, i) => `
                        <div class="
                            p-2 rounded
                            ${i === answer.correct ? 'bg-green-100 dark:bg-green-900/50 border-l-4 border-green-500' : ''}
                            ${i === answer.selected && !isCorrect ? 'bg-red-100 dark:bg-red-900/50 border-l-4 border-red-500' : ''}
                            ${i === answer.selected && isCorrect ? 'bg-green-100 dark:bg-green-900/50 border-l-4 border-green-500' : ''}
                            ${i !== answer.selected && i !== answer.correct ? 'bg-gray-100 dark:bg-gray-700/50' : ''}
                        ">
                            ${opt}
                            ${i === answer.correct ? ' <span class="font-bold text-green-600 dark:text-green-400">(Correct)</span>' : ''}
                            ${i === answer.selected && !isCorrect ? ' <span class="font-bold text-red-600 dark:text-red-400">(Your Answer)</span>' : ''}
                        </div>
                    `).join('')}
                </div>
                <div class="explanation">
                    <h4 class="font-semibold text-indigo-800 dark:text-indigo-300">Explanation:</h4>
                    <p class="text-gray-700 dark:text-gray-300">${answer.explanation}</p>
                </div>
            `;
            reviewContentContainer.appendChild(reviewBlock);
        });

        // Switch views
        scoreView.classList.add('hidden');
        reviewView.classList.remove('hidden');
    });

    backToScoreButton.addEventListener('click', () => {
        reviewView.classList.add('hidden');
        scoreView.classList.remove('hidden');
    });

    // --- Function: Toggle Mode ---
    modeStudyBtn.addEventListener('click', () => {
        quizMode = 'practice'; // "Study Mode"
        modeStudyBtn.classList.add('active-mode');
        modeTestBtn.classList.remove('active-mode');
        startQuiz(); 
    });
    
    modeTestBtn.addEventListener('click', () => {
        quizMode = 'test'; // "Practice Test"
        modeTestBtn.classList.add('active-mode');
        modeStudyBtn.classList.remove('active-mode');
        startQuiz();
    });

    // --- Initial Load ---
    setTimeout(() => {
        startQuiz();
    }, 500); // 0.5 second delay
});