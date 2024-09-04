// DOM 요소를 생성하고 속성을 설정하는 함수
const makeDomwithProperties = (domType, propertyMap) => {
  const dom = document.createElement(domType);
  //   makeDomwithProperties: domType과 propertyMap을 인자로 받아 DOM 요소를 생성하고 속성을 설정하는 함수입니다.
  //   document.createElement(domType): domType에 해당하는 DOM 요소를 생성합니다.

  Object.keys(propertyMap).forEach((key) => {
    //Object.keys(propertyMap): propertyMap 객체의 모든 속성 이름을 배열로 가져옵니다.
    if (key === "innerHTML") {
      //key가 'innerHTML'인 경우, dom.innerHTML을 설정합니다.
      dom.innerHTML = propertyMap[key];
    } else if (key === "src") {
      //key가 'src'인 경우, dom.src을 설정합니다.
      dom.src = propertyMap[key];
    } else if (key === "className") {
      //key가 'className'인 경우, dom.className을 설정합니다.
      dom.className = propertyMap[key];
    } else {
      //그 외의 경우, dom[key]을 설정합니다.
      dom[key] = propertyMap[key];
    }
  });
  return dom; //설정된 DOM 요소를 반환합니다.
};

// 자식 요소를 부모 요소에 추가하는 함수
export const appendChildrenList = (target, childrenList) => {
  //arget 요소에 childrenList의 모든 자식 요소를 추가하는 함수입니다.

  if (!Array.isArray(childrenList)) return; //childrenList가 배열이 아닌 경우, 함수 실행을 중단합니다.

  childrenList.forEach((child) => {
    //childrenList의 각 자식 요소에 대해 반복합니다.
    target.appendChild(child); //target 요소에 각 child 요소를 추가합니다.
  });
};

// 제품 카드 생성
const productCard = makeDomwithProperties("div", {
  className: "product-card",
}); //div 요소를 생성하고 className 속성을 'product-card'로 설정하여 productCard에 저장합니다.

// 프로덕트 이미지 컨테이너 생성
const productImageCon = makeDomwithProperties("div", {
  className: "product-image-con",
}); //div 요소를 생성하고 className 속성을 'product-image-con'으로 설정하여 productImageCon에 저장합니다.

// 프로덕트 이미지 생성
const productImage = makeDomwithProperties("img", {
  src: "public/assets/파프리카.jpg",
  alt: "파프리카 2입",
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

cartToggleBtn.appendChild(cartImage); //cartToggleBtn 버튼에 cartImage 이미지를 자식으로 추가합니다.
appendChildrenList(productImageCon, [productImage, cartToggleBtn]);
//productImageCon 컨테이너에 productImage와 cartToggleBtn 요소를 자식으로 추가합니다.

// 제품 이름 생성
const productName = makeDomwithProperties("div", {
  className: "product-name",
  innerHTML: "파프리카 2입",
});

// 제품 가격 컨테이너 생성
const productPriceContainer = makeDomwithProperties("div", {
  className: "product-price-con",
});

// 할인율 생성
const productPriceDiscount = makeDomwithProperties("div", {
  className: "product-discount-percent",
  innerHTML: "20%",
});

// 제품 가격 생성
const productPrice = makeDomwithProperties("div", {
  className: "product-price",
  innerHTML: "2,000원",
});

// 원래 가격 생성
const productOriginalPrice = makeDomwithProperties("div", {
  className: "product-original-price",
  innerHTML: "2,500원",
});

appendChildrenList(productPriceContainer, [productPriceDiscount, productPrice]);
//productPriceContainer에 productPriceDiscount와 productPrice를 자식으로 추가합니다.

// 제품 설명 컨테이너 생성
const productDescription = makeDomwithProperties("div", {
  className: "product-description",
}); //div 요소를 생성하고 className 속성을 'product-description'으로 설정하여 productDescription에 저장합니다.

// 제품 설명 추가
appendChildrenList(productDescription, [
  productName,
  productPriceContainer,
  productOriginalPrice,
]);
//productDescription에 productName, productPriceContainer, productOriginalPrice를 자식으로 추가합니다.

// 최종적으로 제품 카드에 추가
appendChildrenList(productCard, [productImageCon, productDescription]);
//productCard에 productImageCon과 productDescription을 자식으로 추가합니다.

// 제품 카드를 문서에 추가
const sectionDOM = document.querySelector(".product-list-section"); //클래스를 'product-list-section'으로 가진 첫 번째 요소를 선택하여 sectionDOM에 저장합니다.
sectionDOM.appendChild(productCard); //sectionDOM 요소에 productCard를 자식으로 추가합니다.

//이렇게 하면 생성된 productCard가 product-list-section 섹션에 추가됩니다.
