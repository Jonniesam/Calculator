const clear_button = document.getElementById('clear')
const delete_button = document.getElementById('delete')
const divide_button = document.getElementById('divide')
const mutliply_button = document.getElementById('mutliply')
const subtract_button = document.getElementById('subtract')
const add_button = document.getElementById('add')
const equals_button = document.getElementById('equals')
const dot_button = document.getElementById('dot')
const zero_button = document.getElementById('0')
const one_button = document.getElementById('1')
const two_button = document.getElementById('2')
const three_button = document.getElementById('3')
const four_button = document.getElementById('4')
const five_button = document.getElementById('5')
const six_button = document.getElementById('6')
const seven_button = document.getElementById('7')
const eight_button = document.getElementById('8')
const nine_button = document.getElementById('9')


function sum (a, b) {
  let num = a + b;
  return num;
}

function sub (a, b) {
    let num = a - b;
    return num;
}

function multi (a, b) {
    let num = a * b;
    return num;
}

function divide (a, b) {
    let num = a / b;
    return num;
}

function operate (operation, num1, num2){
    switch (operation){
    case 'add':
        sum(num1, num2);
        break;
    case 'subtract':
        sub(num1, num2);
        break;
    case 'multiply':
        multi(num1, num2);
        break;
    case 'divide':
        divide(num1, num2);
        break;
}
};