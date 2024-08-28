// 인수 = argument : 전달하는 값(데이터) , 함수 호출시 값을 전달함  
function sum(num1, num2){
  return num1+num2;
}
// console.log(sum(10,20,30));// 마지막 30은 버려짐
console.log(sum(20)); // nan // num1=10, num2=undifien// 숫자와 언디파인드를 합산하면 nan 이 나옴.
 
// 매개변수 = parameter : 변수, 함수내부에 있는 인자, 전달되는 인수인 값이 변수에 할당됨
// 화살표함수
let func = (arg1,arg2) => expressin
arg1,arg2 // 은 매개변수 
expressin // 은 반환 결과식

// 일반함수를 
function sum(num1, num2){
  return num1+num2;
}
console.log(sum(20)); 
// 화살표함수로 변환
let sum = (num1, num2) => num1 + num2;
// 함수호출
console.log(sum(10,20));

let str = () => {console.log("화살표함수 실습입니다");};

//화살표함수를 
let myAge =20;
let checkMyAge = (myAge < 30) ? () => console.log("30 이상입니다") : console.log("30 이하입니다");


// 일반함수로 바꾸기
function checkMyAge(myAge) {
 return myAge<30 ? "30이상입니다 " : "30이하입니다";
}

console.log(checkMyAge(25));  // "30미만입니다" 출력
console.log(checkMyAge(30));

// 내부함수 : 함수안에 다른 함수 정의하여 사용하는것을 의미, 선언된 함수는 어디서든 호출 가넝~
function sum(num1, num2 ){
  return num1 + num2;
}

function minus(num1, num2 ){
  return num1 - num2;
}

function checkAge(momAge, myAge){
  let sumStr = "엄마와 나의 나이 합은?";
  sumStr += sum(momAge, myAge);

  let minusStr = "엄마와 나의 나이 차는?";
  minusStr += minus(momAge, myAge);

  return sumStr + "\n" + minusStr;
}

console.log(checkAge(60,30));



function calculate(a, b) {

function add(){
  return a+b;
}
function subtract(){
  return a-b;
}
function multiply(){
  return a*b;
}
function divide(){
  if (b === 0) {
    return "Cannot divide by zero";
} else {
    return a / b;
}
}

// 내부 함수들의 결과를 포함한 객체를 반환
return{
  addition : add(),
  subtraction : subtract(),
  multiplication: multiply(),
  division: divide()
};
}

console.log(calculate(8, 2));
// 출력: { addition: 10, subtraction: 6, multiplication: 16, division: 4 }

console.log(calculate(10, 0));
// 출력: { addition: 10, subtraction: 10, multiplication: 0, division: "Cannot divide by zero" }
