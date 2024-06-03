document.addEventListener('DOMContentLoaded', function () {
    const calculator = document.getElementById('calculator');

    const display = document.createElement('input');
    display.id = 'display';
    display.readOnly = true;
    calculator.appendChild(display);

    const keys = document.createElement('div');
    keys.id = 'keys';
    calculator.appendChild(keys);

    const buttons = [
        '7', '8', '9', '+',
        '4', '5', '6', '-',
        '1', '2', '3', '*',
        '0', '.', '=', '/',
        'C'
    ];

    buttons.forEach(value => {
        const button = document.createElement('button');
        button.textContent = value;

        if (['+', '-', '*', '/'].includes(value)) {
            button.classList.add('operator');
        }
        if (value === 'C') {
            button.classList.add('clear');
            button.addEventListener('click', clearDisplay);
        } else if (value === '=') {
            button.addEventListener('click', calculate);
        } else {
            button.addEventListener('click', () => appendToDisplay(value));
        }

        keys.appendChild(button);
    });

    function appendToDisplay(input) {
        display.value += input;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }
});
