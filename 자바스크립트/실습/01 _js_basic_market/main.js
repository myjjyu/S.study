import { getProductCard } from "./module/productCard.js";

const productCard = getProductCard({
  imgSrc: "./public/assets/당근.jpg",
  id: 3,
  name: "친환경 당근 400g",
  discountPercent: 33,
  price: 2000,
  originalPrice: 3000,
});

document.body.appendChild(productCard);
