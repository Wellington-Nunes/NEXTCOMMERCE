'use client'

import React, { useState } from 'react';
import * as S from './styles';
import { ProductListProps } from '@/types/product';
import ProductCard from '../ProductCard';
import SearchBar from '../SearchBar';

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products?.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <>
      <S.SearchWrapper>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search products..."
        />
      </S.SearchWrapper>

      <S.ProductListContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {filteredProducts.length === 0 && (
          <S.NoResultsMessage>
            No products found <strong> {searchTerm}</strong>
          </S.NoResultsMessage>
        )}
      </S.ProductListContainer>
    </>
  );
};

export default ProductList;