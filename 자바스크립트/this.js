// 함수 호출 방법에 따라 값이 결정 => 바인딩
function sFoo(){
  console.log("sFoo ::: " + this);
}

function mFoo(){
  console.log("mFoo :::" + this);
  sFoo();
}
mFoo();
// 자바스크립트에서 전역객체(글로벌객체)는 윈도우객체이다

// 기본바인딩
console.log(this === global); 

a = 37;
console.log(global.a);

this.b = "MDN";
console.log(global.b);
console.log(b);

global.b = "MDN"; // 명시적으로 global 객체에 속성을 추가
console.log(global.b); // "MDN"
console.log(b); // "MDN"

function Foo(){
  this.b = 30;
  console.log(this.b); //30
}
Foo();
// console.log(this.b); // undifind


// 암시적 바인딩 
global.str = "global";

function foo() {
  console.log(this === obj);
  console.log(this.str);
}

let obj = {
  str : 10,
  fn : foo  //Foo 함수 참조 
}

obj.fn(); // 암시적 바인딩
//foo(); // 기본바인딩



//call 을 이용한 명시적 바인딩 
global.str = "global";

function foo() {
  console.log(this === obj);
  console.log(this.str);
}

let obj = {
  str : 10,
  fn : foo  //Foo 함수 참조 
}

foo.call(obj); // 명시적 바인딩



//apply 을 이용한 명시적 바인딩 
function foo(str2) {
  console.log(this === obj);
  console.log(this.str, str2);
  return this.str + str2;
}

let obj = {
  str1: "명시적 바인딩"
};

let bindingFn = function() {
  console.log(arguments);
  return foo.apply(obj, arguments);
}; 

console.log(bindingFn("apply 실습하기", "1"));

//new  바인딩
function foo(str) {
  console.log(this === obj); 
  console.log(this.str);     
  this.str = str;           
}

var str = "Global variable";
var obj = new foo("new 바인딩"); 
console.log(obj, str); 

// 화살표함수 
function foo() {
  console.log("foo의 str: " + str); // 'str'을 정의하고 사용해야 합니다.
  return (str) => {
    console.log("화살표 함수의 this.str: " + this.str);
  };
}

var obj1 = {
  str: "화살표함수 바인딩 실습"
};

var obj2 = {
  str: "화살표함수 재바인딩 실습"
};

// 명시적 바인딩 call
var temp = foo.call(obj1);

// 'str' 변수를 정의하고 사용한 후, 반환된 화살표 함수 호출
temp("새로운 값"); // "화살표 함수의 this.str: undefined"를 출력


// this  바인딩 예외적용
// 이미 바인딩 된 것은 다시 바인딩 불가 
// => 암시적, 명시적이던 재바인딩 불가하다.