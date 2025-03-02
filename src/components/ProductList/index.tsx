import React from 'react';
import * as S from './styles';
import { ProductListProps } from '@/types/product';
import ProductCard from '../ProductCard';


const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <S.ProductListContainer>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.ProductListContainer>
  );
};

export default ProductList;