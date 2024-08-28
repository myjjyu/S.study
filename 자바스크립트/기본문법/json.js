// 자바스크립트 객체 문법(객체 리터럴)
// 구조화된 데이터 표현을 위한 표준형식
// 데이터 전송 시 사용 
// 문자열 형태, 따옴표 표시 

//a프로그램에 b프로그램을 연결하고싶을때 데이터를 전송시킬떄 전송하는게 JSON 형식이다 .

let sonData = `{
  "name": "홍길동",
  "age": "30",
  "gender": "남",
  "interests": ["음악", "댄스"],
  "family": {"father": "홍투길", "moter": "김연삼"},
  "school": null,
  "graduate": true
}`;

let jsonData = JSON.parse(sonData); //제이슨을 -> 자바스크립트로 변환
console.log(jsonData);



let sonData = {
  "name": "홍길동",
  "age": "30",
  "gender": "남",
  "interests": ["음악", "댄스"],
  "family": {"father": "홍투길", "moter": "김연삼"},
  "school": null,
  "graduate": true
};

let jsonData = JSON.stringify(sonData); //자바스크립트를-> 제이슨으로 변환
console.log(jsonData );
