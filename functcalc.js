let screen = document.querySelector('.screen-output')

const updateScreen = (number)=>{
    screen.value = number
}

let numbers = document.querySelectorAll('.numbers')
let operators = document.querySelectorAll('.operator')


let currentVal = `${screen.value}` 
let calcOper = ''
let prevVal = ''




const inputOperator = (operator) => {
    if(calcOper == ''){
        prevVal = currentVal
    }
    calcOper = operator
    currentVal = ''
}


const clearAll = ()=>{
    currentVal = '0'
    calcOper = ''
    prevVal = ''
}


const decimalClicked = (point) => {
    if(currentVal.includes('.')){
        return
    }

    if (screen.value == '0'){
        currentVal = screen.value
    }
    currentVal += point
}


const calculate = () => {
    let result = ''
    if(currentVal == ''){
        currentVal = '0'
    }
    switch(calcOper){
        case '+':
            result = parseFloat(prevVal) + parseFloat(currentVal)
            break
        case '-':
            result = parseFloat(prevVal) - parseFloat(currentVal)
            break
        case 'x':
            result = parseFloat(prevVal) * parseFloat(currentVal)
            break
        case '÷':
            result = parseFloat(prevVal) / parseFloat(currentVal)
            break
        default:
            break
    }
    currentVal = result
    calcOper = ''
}

numbers.forEach((number)=>{
    number.addEventListener('click', (event)=>{
        if(currentVal=='0'){
            currentVal = event.target.value
            updateScreen(currentVal)
        }
        else{
            currentVal += event.target.value
            updateScreen(currentVal)
        }
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click', (event)=>{
        inputOperator(event.target.value)
    })
})

const btn_equal = document.getElementById('btn-equal')

btn_equal.addEventListener('click', (event)=>{
    if(prevVal == ''){
        updateScreen(screen.value) 
    }
    else{
        if(screen.value != '0'){
            currentVal = screen.value
        }
        calculate()
        updateScreen(currentVal)
        clearAll()
    }
})

const btn_clear = document.getElementById('btn-clear')

btn_clear.addEventListener('click', (event)=>{
    clearAll()
    updateScreen(currentVal)
})

const point_sym = document.getElementById('btn-point')

point_sym.addEventListener('click', (event)=>{
    decimalClicked(event.target.value)
    updateScreen(currentVal)
})

const btn_percent = document.getElementById('btn-percent')

btn_percent.addEventListener('click', (event)=>{
    currentVal = currentVal / 100
    updateScreen(currentVal)
})