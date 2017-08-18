/**
 * Show Modal Window.
 * ------------------
 */
function showModal() {

    var styles = {
        opacity: 1,
        top: '50%'
    };

    /** Animate Overlay */
    overlay.fadeIn(OVERLAY_ANIM_SPEED, function () {

        /** Render Results */
        renderResults();

        /** Animate Modal */
        modal.show().animate(styles, MODAL_ANIM_SPEED);
    });

    return false;
}


/**
 * Hide Modal Window.
 * ------------------
 */
function hideModal() {

    var styles = {
        opacity: 0,
        top: '40%'
    };

    modal.animate(styles, MODAL_ANIM_SPEED, function () {
        modal.hide();
        overlay.fadeOut(OVERLAY_ANIM_SPEED);
    });

    return false;
}


/**
 * Reset Form.
 * -----------
 */
function resetResults() {
    form.each(function (index, element) {
        element.reset();
    });
}


/**
 * Check Quiz.
 * -----------
 */
function checkQuiz() {

    var result = true;
    var questions = readLocalStorage(QUESTIONS_KEY);
    questions = JSON.parse(questions);

    /** Quiz Questions */
    questions.forEach(function (question, questionNr) {

        /** Form Answers */
        var formQuestion = form.find('.question').eq(questionNr);
        var formAnswers = formQuestion.find('input');

        /** UnSelect all answers of Question */
        var userAnswer = formAnswers.filter(':checked');
        if (userAnswer.length != 1) {
            result = false;
        }

        /** Validate User Answer */
        formAnswers.each(function (answerNr, formAnswer) {
            if ($(formAnswer).is(':checked') && !question.answers[answerNr].valid) {
                result = false;
            }
        });
    });

    return result;
}

/**
 *
 * Render Result Message.
 * -----------------------
 * @returns boolean|string
 */
function renderResults() {

    var isPassed = checkQuiz();

    var message = isPassed ? 'Отличный результат :)' : 'Не правильно, попробуй еще :(';

    modal.find('.results')
        .toggleClass('alert-danger', !isPassed)
        .empty()
        .text(message);
}


/**
 * Get LocalStorage Value.
 * -----------------------
 * @param key
 * @returns boolean|string
 */
function readLocalStorage(key) {
    return localStorage.hasOwnProperty(key) ? localStorage.getItem(key) : false;
}
