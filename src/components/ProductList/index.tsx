'use client'

import React from 'react';
import * as S from './styles';
import { ProductListProps } from '@/types/product';

import useProductFilter from '@/hooks/useProductFilter';
import ProductCard from '../ProductCard';
import SearchBar from '../SearchBar';
import CategoryFilter from '../CategoryFilter';

const ProductList: React.FC<ProductListProps> = ({ products, categories }) => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProductFilter(products);

  return (
    <>
      <S.FiltersContainer>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search products..."
        />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
      </S.FiltersContainer>

      <S.ProductListContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {filteredProducts.length === 0 && (
          <S.NoResultsMessage>
            No products found {searchTerm && <>for:  <strong> {searchTerm}</strong></>}
            {selectedCategory !== 'all' && <> in:  <strong> {selectedCategory}</strong></>}
          </S.NoResultsMessage>
        )}
      </S.ProductListContainer>
    </>
  );
};

export default ProductList;