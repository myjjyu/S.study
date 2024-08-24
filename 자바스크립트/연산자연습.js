// 증감연산자
// -전위연산자 
// -후위연산자

let a = 0;
let b = 0;
console.log(++a,--b);
// console.log(a++,b--);

// 비교연산자 실습
let a = 11;
let b = 3;

if(a>b){
  console.log(true);
}else{
  console.log(false);
}

// 삼항연산자 실습
let myWeight = 50;
let rtn = (myWeight >= 50) ? "현재몸무게는 50이상입니다" : "현재몸무게는 50미만입니다" ;
console.log(rtn); 

// 조건문 if~eles
let myWeight = 50;

if(myWeight < 50){
  // console.log("현재몸무게는 50이상입니다");
  rtn="현재몸무게는 50이상입니다";
}else{
  // console.log("현재몸무게는 50미만입니다" );
  rtn="현재몸무게는 50미만입니다";
}
console.log(rtn);


// 삼항연산자 
let myAge = 32;
let rtn = (myAge < 20) ? "청소년입니다" : (myAge > 50) ? "중장년입니다" : "어른입니다";
console.log(rtn);

// 조건문 if~eles if 문
let myAge = 32;
if(myAge < 20 ){
  console.log("청소년입니다");
} else if ( myAge > 50){
  console.log("중장년입니다" );
} else {
  console.log("어른입니다 " );
}
