const gifts = [
  {
      name: "유니클로티셔츠",
      description: "삿포로에만 있는 클랙식 티셔츠(L-size)",
      image: "./img/list/유니클로티셔츠.jpeg"
  },
  {
      name: "초콜릿 과자",
      description: "맛있는 초코과자",
      image: "./img/list/과자.jpeg"
  },
  {
      name: "몬자야끼",
      description: "몬자야끼 밀키트 3개",
      image: "./img/list/몬자야끼.jpeg"
  },
  {
      name: "스투시모자",
      description: "brown or black",
      image: "./img/list/스튜시모자.jpeg"
  },
  {
    name: "스투스티셔츠",
    description: "기본 티셔츠 블랙(L-size) !!!!! 맨투맨❌",
    image: "./img/list/티셔츠.jpeg"
},
{
  name: "이브약",
  description: "2통",
  image:"./img/list/이브약.jpeg"
}
];

const giftList = document.getElementById("giftList");

gifts.forEach(gift => {
  const giftItem = document.createElement("div");
  giftItem.className = "gift-item";
  giftItem.innerHTML = `
      <img src="${gift.image}" alt="${gift.name}">
      <h2>${gift.name}</h2>
      <p>${gift.description}</p>
  `;
  giftList.appendChild(giftItem);
});
