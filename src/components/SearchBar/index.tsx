'use client'

import React from 'react';
import * as S from './styles';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = 'Search...' }) => {
    return (
        <S.SearchContainer>
            <S.SearchInput
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </S.SearchContainer>
    );
};

export default SearchBar;