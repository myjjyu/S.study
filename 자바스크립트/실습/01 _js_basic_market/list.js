import { getProductCard } from "./module/productCard.js";

const sectionDOM = document.getElementsByTagName("section")[0];

const productCard = getProductCard({
  imgSrc: "./public/assets/파프리카.jpg",
  id: 1,
  name: "파프리카 2입",
  discountPercent: 20,
  price: 2000,
  originalPrice: 2500,
});

const productCard2 = getProductCard({
  imgSrc: "./public/assets/파스타.jpg",
  id: 2,
  name: "롱 파스타 면 2종",
  discountPercent: 5,
  price: 7600,
  originalPrice: 8000,
});

const productCard3 = getProductCard({
  imgSrc: "./public/assets/당근.jpg",
  id: 3,
  name: "친환경 당근 400g",
  discountPercent: 33,
  price: 2000,
  originalPrice: 3000,
});

const productCard4 = getProductCard({
  imgSrc: "./public/assets/머핀.jpg",
  id: 4,
  name: "[홍대 W마켓] 컵케익 (2입)",
  discountPercent: 20,
  price: 4800,
  originalPrice: 6000,
});

const productCard5 = getProductCard({
  imgSrc: "./public/assets/단호박.jpg",
  id: 5,
  name: "단호박 1통",
  discountPercent: 12,
  price: 3520,
  originalPrice: 4000,
});

const productCard6 = getProductCard({
  imgSrc: "./public/assets/원두.jpg",
  id: 6,
  name: "커피 원두",
  discountPercent: 20,
  price: 2000,
  originalPrice: 2500,
});

sectionDOM.appendChild(productCard);
sectionDOM.appendChild(productCard2);
sectionDOM.appendChild(productCard3);
sectionDOM.appendChild(productCard4);
sectionDOM.appendChild(productCard5);
sectionDOM.appendChild(productCard6);
