// 최소값 최대값 구하기
console.log(Math.max(10,20)); // 최대값 구하기
console.log(Math.min(10,20)); // 최소값 구하기

console.log(Math.max(10,20,-2,0,7,50)); // 최대값 구하기
console.log(Math.min(10,20,-2,0,7,50)); // 최소값 구하기

// 배열로 구할경우 apply 를 넣어서 최소, 최대값을 구할수 있다
let nums = [10,20,-2,0,7,50];
console.log(Math.max.apply(null,nums)); // 최대값 구하기
console.log(Math.min.apply(null,nums)); // 최소값 구하기

//...으로도 반환할수 있듬
let nums = [10,20,-2,0,7,50];
console.log(Math.max(...nums)); // 최대값 구하기
console.log(Math.min(...nums)); // 최소값 구하기