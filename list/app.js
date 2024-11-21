const gifts = [
  {
    name: "👚 스투시 티셔츠 👕",
    title: "티셔츠!!! (맨투맨 ❌ )",
    description: "Size => L",
    image: "./img/list/티셔츠.jpeg",
  },
  {
    name: "👢 GU 어그부츠 👢",
    title: "굽 살짝 있음!! 1️⃣ 갈색,  2️⃣ 블랙",
    description: "Size => S",
    image: "./img/list/ugg.png",
  },
  {
    name: "👚 유니클로티셔츠 👕",
    title: "클래식 로고 티셔츠",
    description: "Size => L",
    image: "./img/list/유니클로티셔츠.jpeg",
  },
  {
    name: "🍪 초콜릿 과자 🍪",
    title: "돈키호테",
    description: "2개",
    image: "./img/list/과자.jpeg",
  },
  {
    name: "🍚 몬자야끼 🍚",
    title: "돈키호테",
    description: "2봉",
    image: "./img/list/몬자야끼.jpeg",
  },
  {
    name: "🍛 오차츠케 🍛",
    title: "돈키호테 ",
    description: "주황1봉, 노랑1봉 총 => 2봉",
    image: "./img/list/오차츠케.png",
  },
  {
    name: " 🍭 곤약젤리 🍭",
    title: "돈키호테 ",
    description: "종류별로 1봉씩",
    image: "./img/list/곤약젤리.jpeg",
  },
  {
    name: "💊 이브 퀵 💊",
    title: "돈키호테 ",
    description: "2통",
    image: "./img/list/이브약.png",
  },
];

const giftList = document.getElementById("giftList");

gifts.forEach((gift) => {
  const giftItem = document.createElement("div");
  giftItem.className = "gift-item";
  giftItem.innerHTML = `
      <img src="${gift.image}" alt="${gift.name}">
      <h2>${gift.name}</h2>
      <p>${gift.title}</p>
      <p>${gift.description}</p>
  `;
  giftList.appendChild(giftItem);
});
