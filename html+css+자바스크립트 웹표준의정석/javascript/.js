
// 어떤 수 x에 0혹은 1만 ㅈㅓ장될수있다 값이 0일때 1로 출력되고1일때는 0으로 출력되도록 하는 코드
// let x = 0; // 또는 1

// if (x === 1) {
//   console.log("0");
// } else {
//   console.log("1");
// }


// const 수학 = "B"
// if (수학 === 'A' || 수학 === "B" || 수학 === "C") {
//   console.log("이 과목을 pass 했습니다");
// }
//  else{
//   console.log("이 과목을 pass 하지 못하였습니다");
//  }




// let result = 1; // 이진수의 개수
// let informationCount = 2; // 표현 가능한 정보의 수

// while (result < 10) {
//     result++;
//     informationCount *= 2;
//     console.log(`이진수 ${result}개는 ${informationCount}개의 정보를 표시가능`);
// }




// let result = 1;

// // 각 단계의 결과를 출력
// for (let i = 1; i <= 10; i++) {
//     result *= 2;
//     console.log(`이진수 ${i}개는 ${result}개의 정보를 표시 가능`);
// }

// let i =1;

// for (let i = 1; i <= 100; i++) {
//   if (i % 4 === 0) {
//       console.log(i + "는 4의 배수입니다.");
//   }
// }



let i= 1; //3의 배수 
let count = 0; // 총합계받을 변수

for(let i =1; i<=50; i++ ){
  if(i % 3 === 0){
    console.log(`${i}는 3의 배수입니다`);
    count++;
  }
}
console.log(`3의 배수는 총 ${count}개입니다.`);




for(let i=9; i>=0; i--){
  if(i % 2 !== 0) {
    console.log(i);
  }
}

let i = 9;
while(i >= 0){
  if(i%2 !== 0){
    console.log(i);
  }
  i--;
}



let x=0; // 합계 받기

for(let i = 1; x<20; i++){
  if(i%2 ===0 || i%3 ===0){
   x += i;
  }
}
console.log(`합계는 ${x}`)




let x =0;//합이 6이 되는 모든 경우의 수 출력

for(let i=1; i<=6; i++){ //첫 번째 주사위
  for(let j =1; j<=6; j++){ //두번째 주사위
    if(i+j === 6){ // 두개의 합이 6인가?
      console.log(`[ ${i}, ${j} ]`); 
      x++; // 눈의합이 6개일때마다 +1
    }
  }
}
console.log(`경우의 수는 ${x}개 입니다.`);

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------


// number 변수 정의 및 값 할당
let number = 1; // 또는 2로 설정

if (number === 1) {
  // 홀수 단 (3, 5, 7, 9) 출력
  for (let i = 3; i <= 9; i += 2) {
    console.log(`구구단 ${i}단:`);
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(''); // 단마다 빈 줄을 추가하여 보기 좋게 출력
  }
} else if (number === 2) {
  // 짝수 단 (2, 4, 6, 8) 출력
  for (let i = 2; i <= 8; i += 2) {
    console.log(`구구단 ${i}단:`);
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(''); // 단마다 빈 줄을 추가하여 보기 좋게 출력
  }
} else {
  console.log('number 변수의 값이 1이나 2가 아닙니다.');


}

