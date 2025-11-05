document.addEventListener('DOMContentLoaded', () => {
    // Check if on review page
    const reviewContentArea = document.getElementById('review-content-area');
    if (!reviewContentArea) return; // Not on the review page

    const urlParams = new URLSearchParams(window.location.search);
    const unitId = urlParams.get('unit');
    
    const titleElement = document.getElementById('review-title');

    if (!unitId || !quizData[unitId] || quizData[unitId].length === 0) {
        titleElement.textContent = 'Error';
        reviewContentArea.innerHTML = '<p class="text-red-500">Unit not found or no questions available. Please go back and select a unit.</p>';
        return;
    }

    const questions = quizData[unitId];
    titleElement.textContent = `Study Sheet: Unit ${unitId} (${questions.length} questions)`;

    let contentHTML = '<div class="space-y-6">';

    questions.forEach((q, index) => {
        contentHTML += `
        <div class="review-block">
            <h2 class="text-lg font-semibold mb-3">${index + 1}. ${q.question}</h2>
            
            <div class="mb-3 space-y-2">
                ${q.options.map((opt, i) => `
                    <div class="p-2 rounded ${i === q.correct 
                        ? 'bg-green-100 dark:bg-green-900/50 border-l-4 border-green-500' 
                        : 'bg-gray-100 dark:bg-gray-700/50'}">
                        
                        ${opt}
                        ${i === q.correct ? ' <span class="font-bold text-green-600 dark:text-green-400">(Correct Answer)</span>' : ''}
                    </div>
                `).join('')}
            </div>
            
            <div class="explanation">
                <h4 class="font-semibold text-indigo-800 dark:text-indigo-300">Explanation:</h4>
                <p class="text-gray-700 dark:text-gray-300">${q.explanation || 'No explanation provided.'}</p>
            </div>
        </div>
        `;
    });

    contentHTML += '</div>';
    reviewContentArea.innerHTML = contentHTML;
});