let blooType = "AB";

if(blooType === "B"){
  console.log("you are b");
}else if (blooType === "A")
  { console.log("you are A");}
else {
  console.log("you are AB");
}


//for~of

let language = "javascript"
let text =""; // 인덱스 하나하나 뽑기

for(let x of language){
  text += x;
  console.log(x);
};
console.log(language);


//while 문
let i = 0;
while(i <3){ console.log(i); i++};


i = 4;
do{
  console.log(i); i++;
} while(i<7);


// for 사용하여 0~10까지의 짝수의 합 구하기

const UNTIL_NUM = 10;
let sum = 0;

for(let i = 0 ; i <= UNTIL_NUM; i ++){
  if(i % 2 == 0) {
    sum += i;
    console.log(i); // 짝수만 보기~!
  }
};
console.log(sum);

//2중 반복문 사용해서 2~9단까지 출력하기
let z = 0;

for(let i = 2; i <=9; i++){
  for(let j = 1; j <=9; j++){
    z=i*j;
    console.log(`${i} * ${j} = ${z}`);
  }
}

// forEach 

// 일반 함수로 인덱스 뽑기 
let nums = [1,2,3,];
for(let i =0; i<nums.length;i++){console.log(nums[i])};

// forEach 활용하여 인덱스 뽑기 
nums.forEach(function(i){console.log(i)});

// 화살표함수 활용하여 인덱스 뽑기 
nums.forEach((i)=>{console.log(i)})

// map을 활용하여 인덱스에 조건 넣기
// 각배열의 2배의 값을 결과값으로 보여줘
let numss = [2,5,7,8];
let use_map = numss.map(function(item){
  return item*2;
});
console.log(use_map);


// find() 와 filter()  
// find() : 콜백 함수의 조건을 만족하는 단 하나의 값만 출력 
let users = [
  { name : "bob", age: 17, job:false},
  { name : "alice", age: 27, job:false},
  { name : "john", age: 37, job:true}, 
];
let find_job = users.find(function(user){
  return user.job == false;
});
console.log(find_job);

let find_age = users.find(function(user){
  return user.age > 19;
});
console.log(find_age);

//filter() : 콜백함수의 조건을 만족하는 값을 모두  배열로 출력

let users = [
  { name : "bob", age: 17, job:false},
  { name : "alice", age: 27, job:false},
  { name : "john", age: 37, job:true}, 
];
let filter_job = users.filter(function(user){
  return user.job == false;
});
console.log(filter_job);

let filter_age = users.filter(function(user){
  return user.age > 19;
});
console.log(filter_age);



//reduce 함수는 배열의 모든 요소를 하나씩 차례대로 처리하면서, 최종적으로 하나의 값을 만들어내는 함수예요. 
//예를 들어, 숫자들의 배열이 있다고 할 때, reduce를 사용해서 이 숫자들의 합을 구할 수 있어요.

//네 개의 주사위가 있어요. 각 주사위에는 숫자가 하나씩 적혀 있어요: 1, 2, 3, 4.

//첫 번째 주사위를 던져서 1이 나왔어요.
//두 번째 주사위를 던져서 2가 나왔어요.
//세 번째 주사위를 던져서 3이 나왔어요.
//네 번째 주사위를 던져서 4가 나왔어요.
//이제 이 주사위 숫자들을 모두 더하고 싶어요.

//reduce는 이렇게 주사위 숫자들을 더해주는 역할을 해요!

let numbers = [1, 2, 3, 4];

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 결과는 10

//numbers 배열: [1, 2, 3, 4]이라는 숫자들이 들어 있어요.
//reduce 함수: 배열의 각 요소(숫자)를 하나씩 처리하면서, 결과를 계산해요.
//accumulator: 이전까지 계산된 값이에요. 처음에는 0(위 코드의 0으로 설정한 값)으로 시작해요.
//currentValue: 현재 배열에서 처리 중인 숫자예요.
//accumulator + currentValue는 새로운 accumulator 값이 되어서 다음 숫자와 더해져요.
//최종 결과: 모든 숫자를 더한 값 10이 sum에 저장돼요.

// reduce의 동작 과정
// 첫 번째 숫자 1을 accumulator에 더해요: 0 + 1 = 1.
// 두 번째 숫자 2를 accumulator에 더해요: 1 + 2 = 3.
// 세 번째 숫자 3을 accumulator에 더해요: 3 + 3 = 6.
// 네 번째 숫자 4를 accumulator에 더해요: 6 + 4 = 10.








