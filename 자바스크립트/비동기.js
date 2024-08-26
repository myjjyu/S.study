// 동기 & 비동기
// 동기 : 순서대로 실행, 직렬정
// 비동기  : 요청 보내면 응답에 상관없이 다음동작 실행 , 동기와 반대의미, 병렬적, Ajax, setTimeout (몇초뒤에~~ 하겠다는뜻) 있음

// 콜백함수 :// 함수 실행 시킨후 이후 실행되는 함수 // 다른함수에 파라미터로 넘겨지는 함수 // 익명전달

// 더하기 함수 
function sum (num1, num2, callback) {
  var result = num1 + num2;
  callback(result);
}

// 더하기 함수 호출
sum(10,20, function(result){
  console.log(result);
});


//promise :// 비동기 실행 결과를 반환하는 객체 => 성공과 실패 // -es6도입 // callback hell 해결

// 더하기 함수 
function sum (num1, num2, callback) {
  var result = num1 + num2;
  callback(result);
}

// 더하기함수 호출
sum(10,20, function(result){
  console.log(result);
});

// 더하기 함수 선언 
function sum (num1, num2, callback) {
  return new Promise((resolve, reject) => {
  resolve(num1 + num2);
});
}
// 함수 호츌
sum(10,20).then((result)=>console.log(result));

//sync: 비동기 함수로 만들기 위해 사용되며, 함수는 자동으로 Promise를 반환합니다.
//await: Promise의 결과를 기다린 후 반환하며, 비동기 작업을 동기적으로 처리할 수 있게 해줍니다.