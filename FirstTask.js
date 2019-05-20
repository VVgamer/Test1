function func1() {
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN (num1)==true) num1 = 0;
    if (isNaN (num2)==true) num2 = 0;
    const c = num1 + num2;
    document.getElementById("result").innerHTML = "Результат: " + c.toFixed(1);
} 