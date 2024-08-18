// 막내 개발자 원두는 사내 컨퍼런스에서 제공될 도넛을 사려고 합니다.
// 컨퍼런스에 참여하는 인원이 n으로 주어지고
// 한 상자에 들어 있는 도넛의 개수가 donuts로 주어질 경우,
// 컨퍼런스에 참여하는 모든 인원이 도넛 하나씩을 받을 수 있게 구매하려면
// 몇 박스의 도넛을 구매해야 하는지 return하는 함수 solution을 완성하세요.

// function solution(n, donuts) {
//   const 사람수 = n;
//   let 도넛수 = donuts;
//   const 박스수 = n / donuts;

//   return 박스수;
// }

// console.log(solution(120, 12));

// 개발자 원두는 운이 좋게 출근길에 n원을 주웠습니다.
// 팀원들과 친해질 겸 현재 자신이 가진 돈 6,000원과 n원을 합쳐
// 팀원들의 커피를 사주려 합니다.
// 팀원 모두에게 공평한 음료를 제공하기 위해 가장 무난한
// 4,100원짜리 아메리카노를 주문하기로 했습니다.
// 출근길에 주운 돈 n이 매개변수로 주어지고, 팀원의 수가 members로 주어질 경우
// 원두에게 남은 돈이 얼마인지 return하는 함수 solution을 완성하세요.

// function solution(n, members) {
// const 남은돈 = 6000+n - (4100 * members);
// return 6000+n - (4100 * members);
// }

// solution(50000, 12);

// console.log(solution(50000, 12));

// 개발자 원두는 사내 프로그램 테스트를 위한
// 테스트용 아이디를 만드는 업무를 받았습니다.
// 원두는 개발팀 팀원의 영어 이름과 생년월일 6자리를 뒤에 붙인 형태로
// 아이디를 만들기로 하였습니다.
// 개발팀 팀원의 영어 이름이 name으로 주어지고 생년월일이 birth로 주어질 경우
// 만들어지는 아이디를 return하는 함수 solution을 완성하세요.

// function solution(name, birth) {

// 1번답안 // const 팀원이름 = name;
// const 생년월일 = birth;

// const 아이디 =  name+birth;

//  2번 답안 const 아이디 = name + birth;
//   return 아이디;
// }

// solution("marco", 970219);

// console.log(solution("marco", 970219));

// 개발자 원두는 이전에 만들었던 사내 프로그램 테스트용 아이디에 대한
// 비밀번호를 함께 만들어 달라는 추가 업무를 받았습니다.
// 팀원의 생년월일을 비밀번호로 하려 했지만 보안성이 낮아 보였습니다.
// 보안성을 높이기 위해 생년월일에 회사의 설립 연도를 더한 숫자를
// 비밀번호로 만들기로 하였습니다.
// 원두는 이 비밀번호를 팀원들의 이메일에
// “비밀번호는 @@@@ 입니다.” 라고 전송하려 합니다.
// 팀원의 생년월일이 birth로 주어지고 회사의 설립 연도가 date로 주어질 때
// “비밀번호는 @@@@입니다.”를 return 하는 함수 solution을 완성하세

// function solution(birth, date) {
//   let 비밀번호 = birth + date;
// return `비밀번호는 ${비밀번호} 입니다`;
// }

// solution(900501, 2021);
//   console.log(`비밀번호는 ${비밀번호} 입니다`);
// }
// solution(900501, 2021);

// 개발자 원두는 회사 이벤트를 위해 제비뽑기 종이를 만들어야 합니다.
// 종이는 1cm 정사각형으로 만들어야 합니다.
// 종이의 가로 길이가 a로 주어지고 세로 길이가 b로 주어질 경우,
// 원두가 가위질을 몇 번 해야 하는지 return 하는 함수 solution을 완성하세요.

// function solution(a, b) {
//   return a * b - 1;
// }

// solution(100, 100);

// console.log(solution(100, 100));

// 개발자 원두는 앞으로의 계획을 세우기 위해 분기별로 일정표를 짜려고 합니다.
// 좀 더 편한 계획을 위해 원두는
// 해당 월을 입력하면 몇 분기인지 number 형태로 알려주는 알고리즘을 만들려 합니다.
// 특정 월이 month로 주어질 때, month는 몇 분기에 해당하는지 return 하는 함수 solution을 완성하세요.

function solution(month) {
  // 월을 3으로 나눈 후, 올림을 해서 몇 분기인지 계산
  const quarter = Math.ceil(month / 3);

  console.log(`분기는 ${quarter} 분기 입니다`);
}

solution(4); 


