// 생성자
//constructor function
//객체 생성하는 함수 , 함수명 첫 글자는 대문자이고 new키워드 사용하여 호출 , this키워드 이용 

//info 생성자 함수 
function info(name, age){
  this.name = name;
  this.age = age;
} 


info.prototype.write = function(){
  console.log("이름은 \'"+ this.name+ "\',  나이는 \'"+this.age+"살\' 입니다.");
}

var info1 = new info("홍길원", 31);
var info2 = new info("홍길투", 32);
var info3 = new info("홍길삼", 33);

info1.write();
info2.write();
info3.write();

console.log(info1);
console.log(info2);
console.log(info3);