"use client";
import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  max-width: 500px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.background_deep_00};
  border-radius: 8px;
  font-size: 1.6rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.background_deep_00};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;


