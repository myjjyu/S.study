//  if( 조건 ){  
//   조건이 참일떄 실행할 코드
// } else { 위 조건이 참이 아닐때 실행할 코드 }

 // 전송버튼 누르면 input 에 입력한 값이 공백이면 알림창 띄어주세묘
 
//  document.querySelector('.btn-primary').addEventListener("click",e =>{
//   if(document.querySelector('.form-control').value == ''){ // 공백일시 알럿창 띄우기
//     e.preventDefault(); // 폼 전송 방지!!!  이거 안하면 success.html 로 이동함
//     alert("아이디를 입력해주세요");
//   } if(document.querySelector(".form-control").value == '') {
//     e.preventDefault();
//     alert("비밀번호를 입력해주세요");
//   }
//  });


 // 응용버전 
document.querySelector(".btn-primary").addEventListener("click", e =>{
  const userId = document.querySelector('.form-control.user-id'); // 아이디 입력 필드
  const password = document.querySelector('.form-control.password'); // 비밀번호 입력 필드

  if(userId.value ==''){
    e.preventDefault();
    alert("아이디를 입력해주세요");
  } else if(password.value == ''){
    e.preventDefault();
    alert("비밀번호를 입력해주세요");
  } else if( 비번이 6자리 미만이면 ){
    e.preventDefault();
    alert("비밀번호는 6자리 이상입니다");
  }
});
