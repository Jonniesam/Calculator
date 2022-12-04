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
const display = document.getElementById('display')
console.log(display);

zero_button.addEventListener('click', function () {
    display.innerText = 0;
    let val = zero_button.innerHTML;
    //console.log(val);
    storeVal(val);
    })
nine_button.addEventListener('click', function () {
    display.innerText = 9;
    let val = nine_button.innerHTML;
    //console.log(val);
    storeVal(val);
    })
eight_button.addEventListener('click', function () {
    display.innerText = 8;
    let val = eight_button.innerHTML;
    //console.log(val);
    storeVal(val);
    })

seven_button.addEventListener('click', function () {
    display.innerText = 7;
    let val = seven_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

six_button.addEventListener('click', function () {
    display.innerText = 6;
    let val = six_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

five_button.addEventListener('click', function () {
    display.innerText = 5;
    let val = five_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

four_button.addEventListener('click', function () {
    display.innerText = 4;
    let val = four_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

three_button.addEventListener('click', function () {
    display.innerText = 3;
    let val = three_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

two_button.addEventListener('click', function () {
    display.innerText = 2;
    let val = two_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

one_button.addEventListener('click', function () {
    display.innerText = 1;
    let val = one_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

function storeVal(el) {
    let array1 = [];
    let amount = el;
    array1.push(el);
    console.log(array1);
}


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

function operate (num1, operation, num2){
    if(operation === 'add'){
    return sum(num1, num2);
} else if (operation === 'subtract'){
    return sub(num1, num2);
} else if (operation === 'multiply'){
    return multi(num1, num2);
} else if (operation === 'divide'){
    return divide(num1, num2);
} else {
    return 'error';
}
};

