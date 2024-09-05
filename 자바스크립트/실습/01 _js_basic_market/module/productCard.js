import { appendChildrenList, makeDomwithProperties } from "../utils/dom.js";

export const getProductCard = ({
  imgSrc, 
  name,
  discountPercent,
  price,
  originalPrice,
}) => {
  const productCard = makeDomwithProperties("div", {
    className: "product-card",
  });

  // 프로덕트 이미지 컨테이너 생성
  const productImageCon = makeDomwithProperties("div", {
    className: "product-image-con",
  });
  
  // 프로덕트 이미지 생성
  const productImage = makeDomwithProperties("img", {
    src: imgSrc, // 동적으로 이미지 경로 설정
    alt: name, // 동적으로 제품 이름 설정
  });
  
  // 장바구니 토글 버튼 생성
  const cartToggleBtn = makeDomwithProperties("button", {
    className: "cart-toggle-btn",
    type: "button",
  });
  
  // 장바구니 이미지 생성
  const cartImage = makeDomwithProperties("img", {
    className: "cart-image",
    src: "public/assets/cart.png",
  });
  
  cartToggleBtn.appendChild(cartImage);
  appendChildrenList(productImageCon, [productImage, cartToggleBtn]);
  
  // 제품 이름 생성
  const productName = makeDomwithProperties("div", {
    className: "product-name",
    innerHTML: name, // 동적으로 제품 이름 설정
  });
  
  // 제품 가격 컨테이너 생성
  const productPriceContainer = makeDomwithProperties("div", {
    className: "product-price-con",
  });
  
  // 할인율 생성
  const productPriceDiscount = makeDomwithProperties("div", {
    className: "product-discount-percent",
    innerHTML: `${discountPercent}%`,
  });
  
  // 제품 가격 생성
  const productPrice = makeDomwithProperties("div", {
    className: "product-price",
    innerHTML: `${price.toLocaleString()}원`, // toLocaleString() 수정
  });
  
  // 원래 가격 생성
  const productOriginalPrice = makeDomwithProperties("div", {
    className: "product-original-price",
    innerHTML: `${originalPrice.toLocaleString()}원`, // toLocaleString() 수정
  });
  
  appendChildrenList(productPriceContainer, [productPriceDiscount, productPrice]);
  const productDescription = makeDomwithProperties("div", {
    className: "product-description",
  });
  
  appendChildrenList(productDescription, [
    productName,
    productPriceContainer,
    productOriginalPrice,
  ]);
  
  appendChildrenList(productCard, [productImageCon, productDescription]);

  return productCard;
};

