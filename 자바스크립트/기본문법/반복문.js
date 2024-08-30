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

