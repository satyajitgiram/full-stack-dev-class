const inputLength = document.getElementById('length');const isUppercase = document.getElementById('uppercase');const isLowercase = document.getElementById('lowercase');const isNumber = document.getElementById('numbers')
const isSymbol = document.getElementById('symbols')

const result = document.getElementById('result')
const clipboard = document.getElementById('clipboard')
const generate = document.getElementById('generate-btn')


function generatePassword (length, hasUppercase, hasLowercase,hasNumber, hasSymbol) {
    let generatedPassword = '';
    let typeCont = hasUppercase + hasLowercase + hasNumber + hasSymbol
    let typesArr2 = [{hasLowercase}, {hasUppercase}, {hasNumber}, {hasSymbol} ]
    // console.log("TYPEARRAY WITHOUR FILTER", typesArr2)
    let typesArr = [{hasLowercase}, {hasUppercase}, {hasNumber}, {hasSymbol} ].filter(item=>Object.values(item)[0]) 
    // console.log(typeCont)
    // console.log("With Filter",typesArr)


    for (let i=0;i<length;i+=typeCont){
        
        typesArr.forEach((item)=>{
            const functionName = Object.keys(item)[0]
            generatedPassword += randomFunction[functionName]();
        })
        }
    let finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

// ASCII CHARACTERS 
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65)
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48)
}

function getRandomSymbol(){
    const symbol = "!@#$%^&*()_+:~`></"
    return symbol[Math.floor(Math.random()*symbol.length)]
}

const randomFunction ={
    hasUppercase : getRandomUpper,
    hasLowercase : getRandomLower,
    hasSymbol : getRandomSymbol,
    hasNumber : getRandomNumber
}



generate.addEventListener('click', function(){
    const length = inputLength.value;
    const hasUppercase = isUppercase.checked;
    const hasLowercase = isLowercase.checked;
    const hasNumber = isNumber.checked;
    const hasSymbol = isSymbol.checked;

    const password = generatePassword(length, hasUppercase, hasLowercase,hasNumber, hasSymbol)
    result.innerText = password;

})


var clipboard2 = new ClipboardJS('.btn');

clipboard2.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard2.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});