export default class YearManager {
    constructor(container, text) {
        this.text = text;
        this.container = container;
        this.addEventsPlus();
        this.addEventsMinus();
    }

    addEventsPlus() {
        let btn = this.container.querySelector('#js-plus');
        btn.addEventListener('click', () => {
            this.text.innerHTML = +this.text.innerHTML + 1;
        })
    }

    addEventsMinus() {
        let btn = this.container.querySelector('#js-minus');
        btn.addEventListener('click', () => {
            this.text.innerHTML = this.text.innerHTML - 1;
        })
    }

    static init() {
        let container = document.querySelector('#js-year');
        if (!container) return false;
        let text = document.querySelector('#js-text');
        return new YearManager(container, text)
    }
}