function getRndomLower(){
    // ASCII a is 97
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    // ASCII A is 65
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber () {
    // 0-9 0 is 48 in Ascii 
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol (){
    const symbols = '!@#$%^&*()_+?>';
    // get symbols by symbols [] index
    return symbols[Math.floor(Math.random() * symbols.length)]  
}
const randomFunc = {
    lower: getRndomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol:getRandomSymbol
}
function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword='';
    const typeCount = lower + upper + number + symbol
    const typeArr = [{lower} , {upper}, {number}, {symbol}].filter(item=>Object.values(item)[0]);
    if (typeCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typeCount ) {
        typeArr.forEach(type=>{
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;

}

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

generateEl.addEventListener('click', ()=>{
    const length = Number(lengthEl.value);
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length )

})

clipboardEl.addEventListener('click' ,()=> {
    console.log('clipboard')
    const password = resultEl.innerText;
    if(!password) return;
    navigator.clipboard.writeText(password);
    alert('Password Copied to clipboard')

})
