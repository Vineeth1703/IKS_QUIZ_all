document.addEventListener('DOMContentLoaded', () => {
    // --- THEME TOGGLE ---
    const themeToggle = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-icon-light');
    const darkIcon = document.getElementById('theme-icon-dark');

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        if (lightIcon) lightIcon.classList.add('hidden');
        if (darkIcon) darkIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Toggle theme
            document.documentElement.classList.toggle('dark');
            
            // Update localStorage and icon
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                lightIcon.classList.add('hidden');
                darkIcon.classList.remove('hidden');
            } else {
                localStorage.setItem('theme', 'light');
                lightIcon.classList.remove('hidden');
                darkIcon.classList.add('hidden');
            }
        });
    }

    // --- QUIZ LOGIC (Only on quiz.html) ---
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return; // Stop if not on quiz page

    // NEW loading elements
    const loadingState = document.getElementById('loading-state');
    const quizContent = document.getElementById('quiz-content');

    // Get URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const unitId = urlParams.get('unit');
    
    if (!unitId || !quizData[unitId]) {
        loadingState.innerHTML = '<h1 class="text-2xl p-8 text-red-500">Error: Quiz unit not found. Please <a href="index.html" class="underline">go back</a> and select a unit.</h1>';
        return;
    }

    // Quiz state
    let questions = shuffleArray(quizData[unitId]); // Shuffle the questions for a new test each time
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
    // RE-NAMED button IDs
    const modeStudyBtn = document.getElementById('mode-study');
    const modeTestBtn = document.getElementById('mode-test');
    
    // Results Screen
    const resultsContainer = document.getElementById('results-container');
    const scoreText = document.getElementById('score-text');
    const scorePercentage = document.getElementById('score-percentage');
    const scoreSummary = document.getElementById('score-summary');
    const restartButton = document.getElementById('restart-button');
    const reviewButton = document.getElementById('review-button');

    // Review Modal
    const reviewModal = document.getElementById('review-modal');
    const reviewContent = document.getElementById('review-content');
    const closeReviewBtn = document.getElementById('close-review');

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
        reviewModal.classList.add('hidden');
        
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

        // Question text
        questionText.textContent = question.question;

        // Clear old options and feedback
        optionsContainer.innerHTML = '';
        feedbackContainer.classList.add('hidden');

        // Randomize options
        const randomizedOptions = question.options.map((option, index) => ({ text: option, index: index }));
        shuffleArray(randomizedOptions);
        
        // Store the correct answer's new position
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

        // Handle button state
        nextButton.disabled = true;
        if (quizMode === 'practice') { // This is "Study Mode"
            nextButton.textContent = 'Next';
        } else { // This is "Practice Test"
            if (currentQuestionIndex === questions.length - 1) {
                nextButton.textContent = 'Finish Test';
            } else {
                nextButton.textContent = 'Next';
            }
        }
    }

    // --- Function: Select Option ---
    function selectOption(optionElement, displayIndex, shuffledCorrectIndex) {
        if (isAnswered) return; // Prevent changing answer

        isAnswered = true;
        nextButton.disabled = false;
        
        const isCorrect = (displayIndex === shuffledCorrectIndex);
        const question = questions[currentQuestionIndex];
        
        // Store user answer for review
        userAnswers[currentQuestionIndex] = {
            question: question.question,
            options: Array.from(optionsContainer.children).map(btn => btn.textContent),
            selected: displayIndex,
            correct: shuffledCorrectIndex,
            explanation: question.explanation
        };

        if (isCorrect) {
            score++;
        }

        if (quizMode === 'practice') { // "Study Mode"
            // --- Show instant feedback ---
            Array.from(optionsContainer.children).forEach((btn, index) => {
                btn.disabled = true;
                if (index === shuffledCorrectIndex) {
                    btn.classList.add('correct');
                } else if (index === displayIndex) {
                    btn.classList.add('incorrect');
                }
            });

            // Show explanation
            feedbackTitle.textContent = isCorrect ? 'Correct!' : 'Incorrect';
            feedbackTitle.className = isCorrect ? 'text-green-500 font-bold text-lg mb-2' : 'text-red-500 font-bold text-lg mb-2';
            feedbackExplanation.textContent = question.explanation;
            feedbackContainer.classList.remove('hidden');
        
        } else { // "Practice Test"
            // --- Just highlight selection ---
            Array.from(optionsContainer.children).forEach((btn, index) => {
                btn.disabled = true;
                if (index === displayIndex) {
                    btn.classList.add('selected'); // A neutral "selected" color
                }
            });
        }
    }

    // --- Function: Next/Finish Button ---
    nextButton.addEventListener('click', () => {
        if (!isAnswered) return;

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });

    // --- Function: Show Results ---
    function showResults() {
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        const percentage = Math.round((score / questions.length) * 100);
        scoreText.textContent = `${score}/${questions.length}`;
        scorePercentage.textContent = `${percentage}%`;
        scoreSummary.textContent = `You answered ${score} out of ${questions.length} questions correctly.`;
    }

    // --- Function: Restart Quiz ---
    restartButton.addEventListener('click', () => {
        questions = shuffleArray(quizData[unitId]); // Re-shuffle questions
        startQuiz();
    });

    // --- Function: Review Answers ---
    reviewButton.addEventListener('click', () => {
        reviewContent.innerHTML = ''; // Clear previous review
        userAnswers.forEach((answer, index) => {
            const isCorrect = (answer.selected === answer.correct);
            const reviewBlock = document.createElement('div');
            reviewBlock.className = 'review-block p-4 mb-4 border rounded-lg';
            
            reviewBlock.innerHTML = `
                <h3 class="font-semibold text-lg mb-2">${index + 1}. ${answer.question}</h3>
                <div class="grid grid-cols-1 gap-2 mb-3">
                    ${answer.options.map((opt, i) => `
                        <div class="
                            p-2 rounded
                            ${i === answer.correct ? 'bg-green-100 dark:bg-green-900 border-l-4 border-green-500' : ''}
                            ${i === answer.selected && !isCorrect ? 'bg-red-100 dark:bg-red-900 border-l-4 border-red-500' : ''}
                            ${i === answer.selected && isCorrect ? 'bg-green-100 dark:bg-green-900 border-l-4 border-green-500' : ''}
                            ${i !== answer.selected && i !== answer.correct ? 'bg-gray-100 dark:bg-gray-700' : ''}
                        ">
                            ${opt}
                            ${i === answer.correct ? ' <span class="font-bold text-green-600 dark:text-green-400">(Correct)</span>' : ''}
                            ${i === answer.selected && !isCorrect ? ' <span class="font-bold text-red-600 dark:text-red-400">(Your Answer)</span>' : ''}
                        </div>
                    `).join('')}
                </div>
                <div class="explanation p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                    <h4 class="font-semibold">Explanation:</h4>
                    <p>${answer.explanation}</p>
                </div>
            `;
            reviewContent.appendChild(reviewBlock);
        });
        reviewModal.classList.remove('hidden');
    });

    closeReviewBtn.addEventListener('click', () => {
        reviewModal.classList.add('hidden');
    });

    // --- Function: Toggle Mode (Using new button IDs) ---
    modeStudyBtn.addEventListener('click', () => {
        quizMode = 'practice'; // Internal name for "Study Mode" (instant feedback)
        modeStudyBtn.classList.add('active-mode');
        modeTestBtn.classList.remove('active-mode');
        startQuiz(); // Restart quiz on mode change
    });
    
    modeTestBtn.addEventListener('click', () => {
        quizMode = 'test'; // Internal name for "Practice Test" (score at end)
        modeTestBtn.classList.add('active-mode');
        modeStudyBtn.classList.remove('active-mode');
        startQuiz(); // Restart quiz on mode change
    });

    // --- Initial Load ---
    // Added a slight delay to make the loading animation visible, 
    // simulating data fetching. You can remove this for instant loading.
    setTimeout(() => {
        startQuiz();
    }, 500); // 0.5 second delay
});