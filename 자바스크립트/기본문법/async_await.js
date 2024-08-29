//promise
let pro =new Promise((resolve, reject)=>{
resolve("resolve called");
});
pro.then((data)=>{
  console.log(""then",data");
}).catch((err) => {
  console.log("catch", err);
}).finally(() => {
  console.log("끝");
});

//async&await
let promiseReturnFunc = new Promise((resolve, reject)=>{
resolve(7);
});
async function myFunc(){
  let num = await promiseReturnFunc;
  return num*10;
}
myFunc().then((result)=>{
  console.log(result);
});
////////////////////////////////////////////////////////
async function getUserTodoDate() {
  try {
    let user = await fetchUser(true); // 유저 정보 가져오기
    console.log("유저정보", user);

    let todo; 

    if (user.id == 1) {
      todo = await fetchUser(false); // 투두 정보 가져오기
      console.log("투두정보", todo);
    }

    return {
      userInfo: user,
      todoInfo: todo || null, 
    };
  } catch (error) {
    console.log("catch phrase", error); // 오류 처리
  }
}

getUserTodoDate().then((logData) => {
  console.log(logData);
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fetchNumber 함수 정의
function fetchNumber() {
  return new Promise(resolve => {
    setTimeout(() => resolve(42), 1000); // 1초 후에 42 반환
  });
}

// async 함수 정의
async function getNumber() {
  let number = await fetchNumber(); // 1초 기다리면서 결과를 가져옴
  console.log(number); // 42 출력
}

// async 함수 호출
getNumber();


//async 함수는 자동으로 Promise를 반환해요.
//await는 fetchNumber()가 끝날 때까지 기다렸다가 그 결과를 number 변수에 담아줘요.