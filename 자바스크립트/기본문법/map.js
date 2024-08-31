let map = new Map();

map.set("name","john");
map.set(123,456);
map.set(true,"bool_type");
console.log(map);

console.log(map.get(123));
console.log(map.get("name"));
console.log(map.get(true));
console.log(map.size);

map.delete(123);
console.log(map);
map.clear();
console.log(map);
// new Map(): 빈 Map 객체를 만듭니다.
// map.set(key, value): Map에 키와 값을 추가합니다.
// map.get(key): 특정 키에 대한 값을 가져옵니다.
// map.size: Map에 있는 항목의 개수를 반환합니다.
// map.delete(key): 특정 키와 그에 대한 값을 삭제합니다.
// map.clear(): 모든 항목을 삭제하여 Map을 비웁니다.

map.set(123,789).set(false,"bool_type").set("fruit","banana");
console.log(map);
// map.set(key, value): 새로운 키와 값을 Map에 추가합니다. 체이닝을 통해 여러 항목을 연달아 추가할 수 있습니다.
// console.log(map): Map의 현재 상태를 출력합니다. 각 항목은 {키 => 값} 형식으로 표시됩니다.

// 맵으로 for문 사용 (키값 벨류값 받기)
let recipe_juice =new Map([
["strawberry",50],
["banan",100],
["ice",150],
]);

for (let item of recipe_juice.keys()){
  console.log(item);
};

for (let amount of recipe_juice.values()){
  console.log(amount);
};

for (let entity of recipe_juice){
  console.log(entity);
};
