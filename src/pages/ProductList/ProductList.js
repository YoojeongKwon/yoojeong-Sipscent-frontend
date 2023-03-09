import React, { useEffect, useState } from 'react';
import ProductWrap from './ProductWrap';
import './ProductList.scss';

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/teaListData.json')
      .then(response => response.json())
      .then(data => setProductData(data));
  }, []);

  return (
    <div className="productList">
      <h1 className="titleFloral">{productData[0].category_id}</h1>
      <div className="selectBoxWrap">
        <select className="selectBox">
          <option value="">정렬</option>
          <option>가나다순</option>
          <option>높은 가격순</option>
          <option>낮은 가격순</option>
        </select>
        <button className="filterButton">필터</button>
      </div>
      <div className="buttonWrap">
        <button className="button">티백</button>
        <button className="button">찻잔</button>
      </div>
      <div className="productListWrap">
        <div className="productComment">
          <h2 className="productExplainTitle">
            감각을 자극하면서 향기로운 고요함을 불어넣는 홈 케어 제품
          </h2>
          <p className="productExplain">
            ‘집은 우리의 정서적 심장부’라고 세계적으로 유명한 디자이너 일세
            크로포드(Ilse Crawford)는 말했습니다. 이 명언에 어울리게 이솝은
            실용성과 즐거움 모두를 만족시키는 다양한 아로마 제품들을 제공합니다.
          </p>
        </div>
        {productData &&
          productData.map(product => {
            return (
              <ProductWrap
                key={product.id}
                img={product.image_url}
                name={product.name}
                scent={product.tasting_notes}
                amount={product.size}
                price={product.price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
