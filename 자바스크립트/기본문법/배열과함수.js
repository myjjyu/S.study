//push : 배열끝에 요소 추가
let simArr = ["사과", "바나나", "딸기"];
simArr.push("복숭아");
// 또는
// let simArr = new Array("사과","바나나","딸기");
// simArr.push("복숭아", "수박");

console.log(simArr + "\n" + typeof simArr);
console.log(simArr[2] + "\n" + typeof simArr); // 요소찾기
console.log(simArr.length + "\n" + typeof simArr);

//pop :  배영끝 요소 삭제
let simArr = ["사과", "바나나", "딸기"];
simArr.pop();
// 또는
// let simArr = new Array("사과","바나나","딸기");
// simArr.pop();

console.log(simArr + "\n" + typeof simArr); // 사과, 바나나
console.log(simArr.length + "\n" + typeof simArr); //2
console.log(simArr[2] + "\n" + typeof simArr); //undefined

//unshift : 배열 첫번째 요소 추가
let simArr = ["사과", "바나나", "딸기"];
simArr.unshift("복숭아");
// 또는
// let simArr = new Array("사과","바나나","딸기");
// simArr.unshift("복숭아", "수박");

console.log(simArr);
console.log(simArr[0]); // 요소찾기
console.log(simArr.length + "\n" + typeof simArr);

//shift : 배열 첫번째 요소 삭제
let simArr = ["사과", "바나나", "딸기"];
simArr.shift("복숭아");
// 또는
// let simArr = new Array("사과","바나나","딸기");
// simArr.shift("복숭아", "수박");

console.log(simArr);
console.log(simArr[0]); // 요소찾기
console.log(simArr.length + "\n" + typeof simArr);

// slice : 시작과 끝 범위 요소를 잘라서 새로운 배열생성
// 선택한 인덱스부터 시작해서 선택한 인덱스 전까지 의 추출물을 뽑는다 
// 원본에 영향을 미치지 않는다!! 아예 새로운 배열이 생기는거기 때문에
let simArr = ["사과", "바나나", "딸기", "복숭아", "수박"];
// let rtn = simArr.slice(1,3); // 바나나, 딸기
// let rtn = simArr.slice(-2); // 복숭아, 수박
let rtn = simArr.slice(2,4);//딸기 복숭아  /// 

console.log(simArr);
console.log(rtn);
console.log(simArr.length);
console.log(rtn.length + "\n" + typeof rtn);

// splice :  배열의 기존 요소 삭제 또는 변경 또는 추가
// 원본에 영향감 
let simArr = ["사과", "바나나", "딸기", "복숭아", "수박"];
let rtn = simArr.splice(1, 2, "오렌지", "망고");

console.log(simArr);
console.log(simArr.length + "\n" + typeof rtn);


fruits = ['가',"나","디","라",'마',"바","사","아"]
let x;

x = fruits.splice(1,5); // 인덱스 1번째부터  배열 5개 삭제 
console.log(x);
console.log(fruits);

x = fruits.splice(1,5, "길쥬", "경환"); // 인덱스 1번째부터  배열 5개 삭제  와 동시에 삭제된 자리에 다른거 추가
console.log(x);
console.log(fruits);

for (let i = 0; i < simArr.length; i++) {
  console.log(simArr[i]);
}

// concat :  배열 합침
let simArr = ["사과", "바나나", "딸기", "복숭아", "수박"];
let rtn = ["옥수수", "고구마", "망고"];

let sum = simArr.concat(rtn); // 사과 ~ 망고
let sum = rtn.concat(simArr); // 옥수수 ~ 수박

for (let i = 0; i < sum.length; i++) {
  console.log(sum[i]);
}

// reverse : 배열 거꾸로 정렬
let simArr = ["사과", "바나나", "딸기", "복숭아", "수박"];
simArr.reverse();

for (let i = 0; i < simArr.length; i++) {
  console.log(simArr[i]);
}


// 순회함수(method) : 배열의 값을 읽기 위한 함수, 배열 순회 하면서 복사, 수정 통계 등 산출 가능
// for문
let simArr = ["사과", "바나나", "딸기", "복숭아", "수박"];
for(let i = 0; i<simArr.length; i++){
 console.log(simArr);
}

// forEach : 주어진 함수를 배열요소 각각에 대해 실행 
// calback 함수를 사용하여 각 요소에 대해 실행할수 있는 함수
let simArr = ["사과", "바나나", "딸기", "복숭아", "수박"];
function callback(element){// 배열의 각 요소를 엘리먼트로 받아서 
  console.log(element); // 
}
simArr.forEach(callback); // 배열의 각 요소에 대해 콜백 함수 호출해서 엘리먼트를 콘솔에 출력
//또는 
let simArr = ["사과", "바나나", "딸기"];

simArr.forEach(function(item) { // 배열의 각 요소에 대해 주어진 콜백함수를 한번씩 실행)
  //여기서 forEach 메서드에 전달된 콜백 함수는 익명 함수. 즉, 함수에 이름을 붙이지 않고 정의된 함수입.
    console.log(item);
});

// map 사용
let simArr = ["사과", "바나나", "딸기"];

simArr.map(function(item) { 
    console.log(item);
});


let simArr = ["사과", "바나나", "딸기"];

let newArr = simArr.map(function(item) {
    return item + " 주스";
});

console.log(newArr);  // ["사과 주스", "바나나 주스", "딸기 주스"]



//forEach**는 각 요소에 대해 작업을 수행하지만, 아무것도 반환하지 않습니다. 
//주로 사이드 이펙트(예: 콘솔 출력)를 발생시키는 데 사용됩니다.
//map**은 각 요소를 변환하여 새로운 배열을 반환합니다. 
//기존 배열의 요소들을 바탕으로 변환된 배열을 만들고 싶을 때 사용됩니다.