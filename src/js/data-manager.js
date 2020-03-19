export default class DataManager {
    static init() {
        let selectCar = document.querySelector('#js-cars');
        let selectYear = document.querySelector('#js-text');

        console.log('selectYear', selectYear);

        document.querySelector('#js-car').innerHTML = selectCar.options[selectCar.selectedIndex].value;
        document.querySelector('#js-selectYear').innerHTML = selectYear.innerHTML;
    }
}