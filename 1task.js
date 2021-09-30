function firstTask(){
    let firstInput = prompt('Nubmer:', ['']).trim();

    if(firstInput === ''){
        return console.log('Некорректный ввод!')
    }

    let inputedNumber = Number(firstInput);

    if(isNaN(inputedNumber)){
        return console.log('Некорректный ввод!')
    }

    let secondInput = prompt('Convert to numeral system:', ['']).trim();

    let numeralSystem = Number(secondInput);

    if (isNaN(numeralSystem) || !(numeralSystem<=32) || !(numeralSystem>=2)) {
        return console.log('Некорректный ввод!')
    }
    
    let result = inputedNumber.toString(numeralSystem);

  return console.log(result)
}

function secondTask(){
    let firstInput = prompt('First nubmer', ['']).trim()

    if(firstInput === ''){
        return console.log('Некорректный ввод!')   
    }

    let firstNumber = Number(firstInput);

    if(isNaN(firstNumber)){
        return console.log('Некорректный ввод!')
    }

    let secondInput = prompt('Second number', ['']).trim()
    
    if(secondInput === ''){
        return console.log('Некорректный ввод!')
    }

    let secondNumber = Number(secondInput);

    if (isNaN(secondNumber)) {
        return console.log('Некорректный ввод!')
    }
    
    let result = `Ответ: ${firstNumber + secondNumber}, ${firstNumber/secondNumber}.`;

  return console.log(result)
}