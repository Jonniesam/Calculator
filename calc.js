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
    let val = zero_button.innerHTML;
    //console.log(val);
    storeVal(val);
    })
nine_button.addEventListener('click', function () {
    let val = nine_button.innerHTML;
    //console.log(val);
    storeVal(val);
    })
eight_button.addEventListener('click', function () {
    let val = eight_button.innerHTML;
    //console.log(val);
    storeVal(val);
    })

seven_button.addEventListener('click', function () {
    let val = seven_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

six_button.addEventListener('click', function () {
    let val = six_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

five_button.addEventListener('click', function () {
    let val = five_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

four_button.addEventListener('click', function () {
    let val = four_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

three_button.addEventListener('click', function () {
    let val = three_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

two_button.addEventListener('click', function () {
    let val = two_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

one_button.addEventListener('click', function () {
    let val = one_button.innerHTML;
    //console.log(val);
    storeVal(val);
})

add_button.addEventListener('click', function () {
    let val = add_button.innerHTML;
    console.log(val);
    storeVal(val);
    })

subtract_button.addEventListener('click', function () {
    let val = subtract_button.innerHTML;
    console.log(val);
    storeVal(val);
    })

mutliply_button.addEventListener('click', function () {
    let val = mutliply_button.innerHTML;
    console.log(val);
    storeVal(val);
    })

divide_button.addEventListener('click', function () {
    let val = divide_button.innerHTML;
    console.log(val);
    storeVal(val);
    })

const operators = [];
let operator = operators.values();
const array1 = [];
const array2 = [];


function getNum(arr) {
    const join = arr.join('');
    const num = +join;
    return num;
    }


function storeVal(el) {
    let amount = el;
    let check = operators.length >= 1 ? true : false;
if (el === '+' || el === '-' || el === 'x' || el === '/') {
        operators.push(amount);
        return operators;
}else if (check === false){
    array1.push(amount);
    let firstSet = getNum(array1);
    display.innerHTML= firstSet;
    console.log (firstSet);
} else if (check === true) {
    array2.push(amount);
    let secondSet = getNum(array2);
    display.innerHTML= secondSet;
    console.log (secondSet);
};

}

equals_button.addEventListener('click', function () {
    let results = operate(getNum(array1), operators.toString(), getNum(array2));
    display.innerHTML = results;
});


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
    if(operation === '+'){
        return sum(num1, num2);
    } else if(operation === '-'){
        return sub(num1, num2);
    } else if(operation ==='x'){
        return multi(num1, num2);
    } else if (operation ==='/'){
        return divide(num1, num2);
} else {
    return 'error';
}
}

operate(6, 'divide', 2);