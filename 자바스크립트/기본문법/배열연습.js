let simArr = new Array("사과","바나나","딸기");
simArr.length = 2; // 배열삭제
console.log(simArr);
console.log(simArr[2]);

let simArr = new Array("사과","바나나","딸기");
let rtn = simArr[0] + "," + simArr[2];
// let rtn = new Array("수박","복숭아"); // 배열안의 인덱스끼리 더할수있다
// let sum = simArr + rtn; //  새로운 배열추가
console.log(rtn + "\n"+ typeof(rtn));
// console.log(sum);


let simArr = new Array("사과","바나나","딸기");
console.log(simArr[simArr.length -1]); // 마지막 요소 찾기 

let simArr = new Array("사과","바나나","딸기","바나나");
console.log(simArr.indexOf("바나나")); // 희망하는 요소의 인덱스 찾기 // 같은 요소가 중복으로 있어도 맨 처음인덱스 값을 출력함 

//////////////유사배열//////////////
// 1. 배열과 유사한 방식을 가짐 
// 2. 배열의 함수 사용불가
// 3. Array.isArray 반환값 false

let simArr = {
  apple : "사과",
  banana : "바나나",
  watermelon : "멜론",
  length : 3
};

console.log(simArr["apple"]);
console.log(simArr.apple);


////////////////// 객체의 키 배열 사용하여 인덱스 접근 //////////////////////////
// 키 배열 생성
let keys = Object.keys(simArr);
// 인덱스로 접근 (예: 첫 번째 요소)
console.log(simArr[keys[0]]); // "사과"
console.log(simArr[keys[1]]); // "바나나"

// 배열처럼 인덱스로 접근
for (let i = 0; i < keys.length - 1; i++) { // length 키는 제외
  console.log(simArr[keys[i]]); //사과 //바나나 //멜론
}

/////////////////////객체의 키-값 쌍을 배열로 변환 하여 인덱스 접근//////////////////////
// 객체를 배열로 변환
let entries = Object.entries(simArr);

// 인덱스로 접근 (예: 두 번째 요소)
console.log(entries[0][1]); // "사과"
console.log(entries[1][1]); // "바나나"