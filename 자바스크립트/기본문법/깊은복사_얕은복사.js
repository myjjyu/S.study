
//////////////////////////////////////////
let square ={
height: 50,
width: 70,
color: undefined,
navigator : null
};
// swallowcopy
let swallowsquare =  square;
swallowsquare.height = 60;
console.log(square);
// - square 그 자체를 변경함 


/// deep copy
let deepsquare =  JSON.parse(JSON.stringify(square));
deepsquare.height = 90;
console.log(square);
console.log(deepsquare);


// //deep copy2 깊은복사를 제일 안전하고 똑같이함
let deepsquare2 =  Object.assign({},square);
deepsquare2.height = 100;
console.log(square);
console.log(deepsquare2);
// 새로운 변수를 생성하고 그 새로운변수자리에 Object.assign 내장함수를 사용하여 깊은 복사


// 반복문 for 문을 총한 객체 복사
let user = {
  name : "john",
  age : 23,
};


// //얕은복사 shallow copy 
// let admin = {};

// for(let key in user){
//   admin[key] =user[key];
// }


//assing을 이용한 얕은 복사 
// let admin = Object.assign({}, user);


// 전개연산자 를 이용한 복사
let admin={...user};

admin.name = "park";

console.log(admin.name);
console.log(user.name);