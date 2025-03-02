'use client'

import React from 'react';
import * as S from './styles';

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onChange }) => {
    return (
        <S.CategoryFilterContainer>
            <S.Label id="category-filter-label" htmlFor="category-filter">
                Filter by category:
            </S.Label>
            <S.Select
                id="category-filter"
                title="Category filter dropdown" 
                aria-labelledby="category-filter-label"
                aria-label="Filter by category"
                value={selectedCategory}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </S.Select>
        </S.CategoryFilterContainer>
    );
};

export default CategoryFilter;
