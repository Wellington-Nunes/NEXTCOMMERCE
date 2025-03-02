"use client";

import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.ultraWide}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const SearchWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

export const NoResultsMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: start;
  color: ${({ theme }) => theme.colors.primary_text};
  font-size: 2rem;
`;
