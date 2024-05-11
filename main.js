var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var Plus = document.getElementById("plus");
var Minus = document.getElementById("minus");
var Umnoj = document.getElementById("umnoj");
var Delit = document.getElementById("delit");
var Result = document.getElementById("result");
function AddNum() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var result = a + b;
    Result.textContent = result.toString();
}
Plus.addEventListener("click", AddNum);
function MinusNum() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var result = a - b;
    Result.textContent = result.toString();
}
Minus.addEventListener("click", MinusNum);
function UmnojNum() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var result = a * b;
    Result.textContent = result.toString();
}
Umnoj.addEventListener("click", UmnojNum);
function DelitNum() {
    var a = parseFloat(num1.value);
    var b = parseFloat(num2.value);
    var result = a / b;
    Result.textContent = result.toString();
}
Delit.addEventListener("click", DelitNum);
