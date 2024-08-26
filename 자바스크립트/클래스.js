// 객체를 생성하기 위한 틀 이다. 객체가 아니다
// 클래스 안에 데이터 X // 메모리에 올라가지 xx

// 클래스 생성
// class 클래스명 (맨앞에 대문자) {//생성자 // 관련함수}
class Info {
  //생성자
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  ///출력 함수생성
  write() {
    return `이름은 ${this.name}, 나이는 ${this.age} 살`;
  }
}

//클래스 사용 (인스턴스 생성) 
let info = new Info({ name: "홍길원", age: 32 });
console.log(info.write());


//클래스 상속
class Calc {

  //생성자
  constructor(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
    this.result = 0;
  }

  // 더하기 함수
sum(){
  this.result = this.num1 + this.num2;
  return this.result;
}

// 빼기함수
subs(){
  if(this.num1 >= this.num2){
    this.result = this.num1-this.num2;
  }else{
    this.result = this.num2-this.num1;
  }
  return this.result;
}
//결과값 반환하는 함수
write(){
  return this.result;
}
}


// 부모클래스 Calc클래스
// 자식클리스 result 클래스

class Result extends Calc{
  sum(){
    super.sum();
  }
  subs(){
    super.subs();
  }
  // 메소드 오버라이딩
  write(){
    return "결과는??"+ this.result;
  }
}

// 부모 class
let calc = new.Calc(10,20);
calc.subs();
console.log(calc.write());

//자식 class
let result = new.Result(10,20);
result.sum();
console.log(result.write());