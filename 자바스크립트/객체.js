// 객체 선언하기
let obj ={};
console.log(typeof obj);

let info ={
age : 20,
name : "홍길동",
weight : "43kg",
interests : ["music", "dancing"],
desc : function(){
console.log("나의 정보입니다");
}
};

// console.log(info.age);
// console.log(info.name);
// console.log(info.interests[0]);
// info.desc();

info.name ={
real : "홍길동",
fake : "홍길순"
};

// console.log(info.name);
// console.log(info.name.real);
// console.log(info.interests[0]);

// 대괄호로 도 접근가능
console.log(info["name"]);
console.log(info["name"]["real"]);
console.log(info["interests"][0]);

// object.keys() 객체에서 key 를 배열로 반환
let info ={
  age : 20,
  name : "홍길동",
  weight : "43kg",
  interests : ["music", "dancing"],
  desc : function(){
  console.log("나의 정보입니다");
  }
  };

  console.log(Object.keys(info));

  // object.values() 객체에서 value 를 배열로 반환

  let info ={
    age : 20,
    name : "홍길동",
    weight : "43kg",
    interests : ["music", "dancing"],
    desc : function(){
    console.log("나의 정보입니다");
    }
    };
  
    console.log(Object.values(info));
    console.log(Object(info)); //키와 벨류 둘다 반환
  

   // Object.entries() : Key 와 values 를 한쌍의 배열로 반환

  let info ={
    age : 20,
    name : "홍길동",
    weight : "43kg",
    interests : ["music", "dancing"],
    desc : function(){
    console.log("나의 정보입니다");
    }
    };
    console.log(Object.entries(info));


    ///// for ~ in 으로 반환
    let info ={
      age : 20,
      name : "홍길동",
      weight : "43kg",
      interests : ["music", "dancing"],
      desc : function(){
      console.log("나의 정보입니다");
      }
      };

      for(let i in info){
        console.log(i +"::::"+ info[i]);
      }


      // 값 재할당
      let info ={
        age : 20,
        name : "홍길동",
        weight : "43kg", }

      info.age =30;
      // info["age"]=30;
      info.height = "180cm"
      console.log(Object.keys(info) +"\n"+info.age+"\n"+ info.height);
      

    // 프로퍼티 삭제
    let info ={
      age : 20,
      name : "홍길동",
      weight : "43kg", }
// delete info.age;
delete info["age"];
console.log(Object.keys(info)+"\n"+info.age);