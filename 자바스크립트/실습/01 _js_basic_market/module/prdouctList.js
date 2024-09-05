import { makeDomwithProperties } from "../utils/dom";
import { getProductCard } from "./productCard";

const getProductList = (getProductList) => {
  const getProductListContainer = makeDomwithProperties("div", {
    className: "product-list-con",
  });

  productInfoList.forEach((productInfo) => {
    productListContainer.appenChild(
     getProductCard({
      ...productInfo
     })
    );
  });
};
