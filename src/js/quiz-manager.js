import YearManager from './year-manager';
import DataManager from './data-manager';
import form from './form';

const state = {};

class QuizManager {
    static addEvents(btn) {
        let btns = document.querySelectorAll('[data-block]');
        let blockYear = document.querySelector('#js-year');
        let blockData = document.querySelector('#js-data');

        btns.forEach((btn) => {
            btn.addEventListener( 'click', () => {
                if (btn.dataset.block === 'js-year') {
                    QuizManager.showBlock(blockYear);
                    QuizManager.scrollBlock(blockYear);
                    YearManager.init();
                }
                if (btn.dataset.block === 'js-data') {
                    QuizManager.showBlock(blockData);
                    QuizManager.scrollBlock(blockData);
                    DataManager.init();
                    changeState(state);
                    console.log(state);
                    form(state);
                }
            })
        })
        
    }

    static showBlock(block) {
        block.style.display = 'flex';
    }

    static scrollBlock(block) {
        block.scrollIntoView({block: "start", behavior: "smooth"});

    }

    static init() {
        QuizManager.addEvents();
    }
}

const changeState = (state) => {
    state.car = document.querySelector('#js-car').innerHTML;
    state.year = document.querySelector('#js-selectYear').innerHTML;
}

export default QuizManager