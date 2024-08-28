// 문자열실습

let myAge = 10;
let myAge2 = myAge;

myAge=20;

console.log("myAge" + myAge
);


console.log("myAge2 " + myAge2);


let myAge = 10;
console.log(String(myAge) + typeof String(myAge)); // 숫자 10을 문자열 "10"으로 변환하여 출력
// console.log(typeof String(myAge)); // 변환된 문자열의 타입을 출력 (string)


let myAge = 20;
let flag;

if (myAge == 20){
  flag = true;
} else{
  flag =false;
}


console.log(flag + typeof(flag));



let mywight = 70.783839;
if(mywight >= 70){
  mywight =  Number.parseInt(mywight);
}else{
  mywight =Number.parseInt(mywight)+6;
}
console.log(mywight);


let str = "123aaa";
console.log(Number.parseFloat(str) + typeof(str));   // 문자열을 123으로 출력

let str = "aaa 123 aaaaa";
console.log(Number.parseFloat(str) + typeof(str)); // 문자열로 시작하면 변환실패,,

Number.isInteger //정수인지 참인지 거짓인지 확인하는 값

let myInfo = "\ 1.키:: 160cm \n 2.몸무게:: 비밀 \n 3.나이 ::32 \n 4.학력:대졸"
console.log(myInfo);


let Text = "heloow"
let rtn = Text.charAt(3);
console.log(rtn);

let Text = "heloow"
// let rtn = Text.startsWith("he");
let rtn = Text.endsWith("ow");
console.log(rtn);

let Text = "heloow"
let rtn = Text.indexOf("l");
console.log(rtn);


let Text = "heloow"
let rtn = Text[4];
// let rtn = Text[2];
console.log(rtn); 


let text = 123 + "";
// console.log(text + typeof(text));
console.log(text + typeof+(text));

 
let text = "hello world";
// let rtn = text.replace("h","H");
let rtn = text.replaceAll("l","L");
console.log(rtn +"\n"+typeof(rtn));

let text1 = "hello";
let text2 = "world";
let rtn = text1.concat(text2);// 병합 하겠다
console.log(rtn +"\n"+typeof(rtn));

// 배열병합
let text1 = ["h","e","l","l","o"];
let text2 = ["h","e","l","l","o"];
let rtn = text1.concat(text2);// 병합 하겠다
console.log(rtn +"\n"+typeof(rtn));


let text1 = ["h","e","l","l","o"];
let rtn = text1.join();
let rtn = text1.join("");
// let rtn = text1.Join(",");
console.log(rtn +"\n"+typeof(rtn));

let text = "hello";
let rtn = Array.from(text); // 문자열을 배열로 변환
console.log(rtn +"\n"+typeof(rtn));

let text = "hello";
let rtn = [...text]; // 문자열을 배열로 변환
console.log(rtn +"\n"+typeof(rtn));

// 템플릿 리터럴 실습
let text = `hello 
world`;
console.log(text);
let text = `hello\ world`;
console.log(text);

