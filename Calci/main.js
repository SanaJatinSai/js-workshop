document.getElementById('Cform').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const num1 = Number(document.getElementById('Num1').value);
    const num2 = Number(document.getElementById('Num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter numbers.";
    } else if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            result = "Error";
        } else {
            result = num1 / num2;
        }
    } else {
        result = "No operation";
    }

    
    document.getElementById('result').innerText = result;
});