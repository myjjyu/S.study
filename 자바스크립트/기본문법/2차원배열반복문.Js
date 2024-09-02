let array = [[101,102,103],[201,202,203],[301,302,303]];

for (let i = 0; i <array.length; i++){
  for(let j = 0; j<array[i].length;j++){
    console.log(array[i][j]);
  }
}

let fruits = [
  ["strawberry", 50],
  ["bananan", 100],
  ["ice", 150],
];

for(let i =0; i<fruits.length; i++){
  console.log(`fruit : ${fruits[i][0]},\n ==amount: ${fruits[i][1]}`);
} 