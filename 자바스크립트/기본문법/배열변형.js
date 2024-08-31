// 정렬 / 반전 

//배열정렬 : sort(); / 배열 반전 : reverse();
let nums = [1,0,12,3,6,-7];
console.log(nums.sort());
console.log(nums.reverse());
// sort 의 문제점을 해결하기위해  콜백함수(고차함수 ) (비교함수로 해결가능 )

let numss = [1,0,12,3,6,-7];
numss.sort(function(a,b){
  return a - b;
});
console.log(numss);

let numsss = [1,0,12,3,6,-7];
numsss.sort(function(a,b){
  return b - a;
});
console.log(numsss);

// sort 대문자 / 소문자  순서 해결 
let ascending_order = function(x, y) {
  x = x.toUpperCase(); // 대문자 변경
  y = y.toUpperCase();

  if (x > y) {
      return 1;
  } else if (y > x) { // 비교 순서 수정
      return -1;
  } else {
      return 0;
  }
};

let descending_order = function(x, y) {
  x = x.toUpperCase(); // 대문자 변경
  y = y.toUpperCase();

  if (x < y) {
      return 1;
  } else if (y < x) { // 비교 순서 수정
      return -1;
  } else {
      return 0;
  }
};

let fruits = ["apple", "Orange", "orange", "banana", "melon"]; // 빈 요소 제거
console.log(fruits.sort(ascending_order)); // 오름차순 정렬
console.log(fruits.reverse(descending_order)); //내림차순


// 고차함수 (콜백함수 ascending_order/descending_order) 공용화
let ascending_order = function(x,y){
  if(typeof x === "string") x=x.toUpperCase();
  if(typeof y === "string") y=y.toUpperCase();

  return x > y ? 1:-1 // 오름차순 작은값이 앞에 
};

let descending_order = function(x,y){
  if(typeof x === "string") x=x.toUpperCase();
  if(typeof y === "string") y=y.toUpperCase();

  return x < y ? 1:-1 // 내림차순 작은값이 뒤에 
};
let nums =[1, -1, 2,5,8,0,10,30,20];
console.log(nums.sort(ascending_order));
console.log(nums.sort(descending_order));

let fruits = ["apple", "Orange", "orange", "banana", "melon"]; // 빈 요소 제거
console.log(fruits.sort(ascending_order)); // 오름차순 정렬
console.log(fruits.sort(descending_order)); //내림차순


// 배열변환
// 배열값을 문자열로 변환 :Join (separator) // split() 문자열을 배열로 변환

let fruits = ["apple","orange","banana","melon"];
let str = fruits.join();
console.log(str);


let srt_separator = fruits.join("||"); //separator 추가 해보기 (||)
console.log(srt_separator);

let result = srt_separator.split("||"); // 문자열을 다시 배열로 변환
console.log(result);
