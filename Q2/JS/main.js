let stringCont = document.getElementById("str-var");
let intCont = document.getElementById("int-var");
let sumFuncAns = document.getElementById("sum-func-answer");
let if_elseAns = document.getElementById("if-else-header-answer");

let stringVar = "Devyash Jain";
stringCont.innerHTML = stringVar;
let integerVar = 20;
intCont.innerHTML = integerVar;
let sumFunc = (num1, num2) => {
  return num1 + num2;
};

sumFuncAns.innerHTML = sumFunc(5, 1);

let age = 20;
if (age >= 20) {
  if_elseAns.innerHTML = "Yes";
} else {
  if_elseAns.innerHTML = "No";
}
for (let a = 1; a < 11; a++) {
  document.write(a * 10 + "<br>");
}