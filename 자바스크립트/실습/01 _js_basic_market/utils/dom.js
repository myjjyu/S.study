const makeDomwithProperties = (domType, propertyMap)=>{
  const dom = document.createElement(domType);
  //domType: 생성할 DOM 요소의 타입을 나타내는 문자열 (예: 'div', 'span', 'input' 등).
  //document.createElement(domType)를 사용하여 domType으로 지정된 타입의 새로운 DOM 요소를 생성합니다.
  Object.keys(propertyMap).forEach((key)=>{
    //Object.keys(propertyMap)를 사용하여 propertyMap 객체의 모든 속성 이름(키)을 배열로 가져옵니다.
    dom[key] = propertyMap[key];
    
  });

  return dom;
};

export const appendChildrenList =(traget, childrenList) =>{
if (!Array.isArray(childrenList)) return;

childrenList.forEach((children)=>{
  traget.appendChild(children);
})
};