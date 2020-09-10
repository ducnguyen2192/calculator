function addition()
{
    let firstNum = parseFloat(document.getElementById("firstNum").value)
    let secondNum = parseFloat(document.getElementById("secondNum").value)
    let a = firstNum + secondNum;
    document.getElementById("result").innerHTML= "the result is " + a;
}

function subtraction()
{
    let firstNum = parseFloat(document.getElementById("firstNum").value)
    let secondNum = parseFloat(document.getElementById("secondNum").value)
    let s = firstNum - secondNum;
    document.getElementById("result").innerHTML= "the result is " + s;
}

function multiplication()
{
    let firstNum = parseFloat(document.getElementById("firstNum").value)
    let secondNum = parseFloat(document.getElementById("secondNum").value)
    let m = firstNum * secondNum;
    document.getElementById("result").innerHTML= "the result is " + m;
}

function division()
{
    let firstNum = parseFloat(document.getElementById("firstNum").value)
    let secondNum = parseFloat(document.getElementById("secondNum").value)
    let d = firstNum / secondNum;
    document.getElementById("result").innerHTML= "the result is " + d;
}