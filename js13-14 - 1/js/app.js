'use strict';

/**
 * Settings.
 * ---------
 */
const MODAL_ANIM_SPEED = 200;
const OVERLAY_ANIM_SPEED = 500;
const QUESTIONS_KEY = "questions";

tmpl.arg = "data";
var wrapper, template, form, modal, overlay, quiz;

$(function () {

    /** --------------
     *   Initialize
     * ---------------
     */

    /** Wrapper */
    wrapper = $('.wrapper');

    /** Template */
    template = $('#template').html();

    /** Quiz */
    quiz = {
        questions: [
            {
                title: '1. Для чего используется конструкция try-catch в javascript?',
                answers: [
                    {text: 'Для обработки возможных ошибок', valid: true},
                    {text: 'Для генерирования ошибок.', valid: false},
                    {text: 'Для замены условного оператора if', valid: false}
                ]
            },

            {
                title: '2. Какой формат передачи данных наиболее распостранен?',
                answers: [
                    {text: 'XML', valid: false},
                    {text: 'JSON', valid: true},
                    {text: 'TXT ', valid: false}
                ]
            },

            {
                title: '3. С помощью какого объекта осуществляется доступ к локальному хранилищу в современных браузерах?',
                answers: [
                    {text: 'localStorage', valid: true},
                    {text: 'LocalStorage', valid: false},
                    {text: 'Storage', valid: false}
                ]
            }
        ]
    };


    /** --------------
     *   LocalStorage
     * ---------------
     */
    var questions = JSON.stringify(quiz.questions);
    localStorage.setItem(QUESTIONS_KEY, questions);


    /** --------------
     *   Template
     * ---------------
     */

    /** Process and Append Quiz */
    questions = readLocalStorage(QUESTIONS_KEY);
    wrapper.append(tmpl(template, {
        questions: JSON.parse(questions)
    }));


    /** --------------
     *   Listeners
     * ---------------
     */

    /** Modal */
    form = $('form');
    modal = $('#modal');
    overlay = $('#overlay');

    /** Submit Form */
    form.on('submit', function () {
        showModal();
        return false;
    });

    /** Close Modal */
    modal.on('click', '.close', function () {
        hideModal();
        return false;
    });

    overlay.on('click', function () {
        hideModal();
        return false;
    });

    /** Reset Results*/
    modal.on('click', '[type="reset"]', function () {
        resetResults();
        hideModal();
        return false;
    });

});
