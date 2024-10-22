//badge 홀수번 클릭시 내부 글자를 light로 변경
//badge 짝수번 클릭시 내부 글자를 light로 변경

// 변수는 잠간 자료를 저장하는 변수문접
//1. 코드 재사용성  2. 특정값을 기억하게 만들고싶을때

let count = 0;

// .badge 요소 선택
const badge = document.querySelector('.badge');

// 초기 커서 스타일 설정
badge.style.cursor = 'pointer'; // 클릭 가능한 스타일로 변경

// 클릭 이벤트 리스너 추가
badge.addEventListener('click', function() {
  count += 1; // 카운트 증가

  // 카운트가 짝수인지 홀수인지 확인
  if (count % 2 === 0) {
    badge.innerHTML = 'Dark 🔄'; // 짝수일 경우 'Dark'로 설정
  } else {
    badge.innerHTML = 'Light 🔄'; // 홀수일 경우 'Light'로 설정
  }

  console.log(count); // 카운트 출력
});
