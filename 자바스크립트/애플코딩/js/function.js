document.getElementById("close").addEventListener("click",()=>{
  document.getElementById("alert").style.display = "none";
});

// 방법1)
// function idtitle() {
//   //1. p태그 내용을 아이디입력으로 바꿈
//   document.getElementById("message").innerHTML = "아이디를 입력하세요";
//   //2. 띄움
//   document.getElementById("alert").style.display = "block";
// }

// function pwtitle() {
//   //1. p태그 내용을 비밀번호입력으로 바꿈
//   document.getElementById("message").innerHTML = "비밀번호를 입력하세요";
//   //2. 띄움
//   document.getElementById("alert").style.display = "block";
// }

// 방법2)
function messageTitle(message) {
  document.querySelector(".message").innerHTML = message;
  document.getElementById("alert").style.display = "block";
}