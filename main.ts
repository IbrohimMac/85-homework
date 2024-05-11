const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const Plus = document.getElementById("plus");
const Minus = document.getElementById("minus");
const Umnoj = document.getElementById("umnoj");
const Delit = document.getElementById("delit");
const Result = document.getElementById("result");

function AddNum() {
  let a = parseFloat(num1.value);
  let b = parseFloat(num2.value);
  let result = a + b;
  Result.textContent = result.toString();
}
Plus.addEventListener("click", AddNum);
function MinusNum() {
  let a = parseFloat(num1.value);
  let b = parseFloat(num2.value);
  let result = a - b;
  Result.textContent = result.toString();
}
Minus.addEventListener("click", MinusNum);
function UmnojNum() {
  let a = parseFloat(num1.value);
  let b = parseFloat(num2.value);
  let result = a * b;
  Result.textContent = result.toString();
}
Umnoj.addEventListener("click", UmnojNum);
function DelitNum() {
  let a = parseFloat(num1.value);
  let b = parseFloat(num2.value);
  let result = a / b;
  Result.textContent = result.toString();
}
Delit.addEventListener("click", DelitNum);
