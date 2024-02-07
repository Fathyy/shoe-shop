import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/Breadcrumbs/BreadCrumbs';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return(
    <div className="">
      <BreadCrumbs product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>
  );
}

export default Product