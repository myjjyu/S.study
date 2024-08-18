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
//    result++;
//     informationCount *= 2;
//     console.log(`이진수 ${result}개는 ${informationCount}개의 정보를 표시가능`);
// }




let result = 1;

// 각 단계의 결과를 출력
for (let i = 1; i <= 10; i++) {
    result *= 2;
    console.log(`이진수 ${i}개는 ${result}개의 정보를 표시 가능`);
}




