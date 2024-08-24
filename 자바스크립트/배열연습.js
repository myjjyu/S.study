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

let simArr = new Array("사과","바나나","딸기");
console.log(simArr.indexOf("사과"));