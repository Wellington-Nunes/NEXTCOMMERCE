"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const ProductDetailContainer = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const ProductImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_deep_04};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  overflow: hidden;

  &:hover .zoom {
    transform: scale(1.4); 
    cursor: zoom-out; 
  }
`;

export const ProductImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.2s ease;
  cursor: zoom-in;

  &.zoom {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
  transform-origin: var(--x) var(--y); 
  }
`;

export const ProductBadge = styled.span<{ $type?: "popular" | "onSale" }>`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${({ theme, $type }) =>
    $type === "onSale" ? theme.colors.danger : theme.colors.success};
  color: ${({ theme }) => theme.colors.background_deep_04};
  font-size: 1.2rem;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 4px;
`;
export const ProductInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const ProductDescription = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.secondary_text};
  line-height: 1.6;
`;

export const ProductPriceContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary_default};
`;

export const OriginalPrice = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.secondary_text};
  text-decoration: line-through;
  font-weight: normal;
  margin-right: 1rem;
`;

export const DiscountedPrice = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.success};
  font-weight: bold;
`;

export const ProductDiscount = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.danger};
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 2.5px 5px;
  border-radius: 4px;
  margin-left: 2rem;
`;

export const ProductCategory = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.secondary_text};
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.secondary_text};
  text-decoration: none;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;
