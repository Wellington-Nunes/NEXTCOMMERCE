"use client";

import Image from "next/image";
import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background_deep_02};
  border: 1px solid ${({ theme }) => theme.colors.background_deep_00};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 450px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  background-color: ${({ theme }) => theme.colors.background_deep_04};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    min-height: 250px;
  }
`;

export const ProductImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const ViewText = styled.p`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  background-color: ${({ theme }) => theme.colors.background_deep_02};
  border: 1px solid ${({ theme }) => theme.colors.background_deep_00};
  color: ${({ theme }) => theme.colors.primary_text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  font-size: 1.4rem;
  font-weight: bold;
  padding: 3px 12px;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${ProductCardContainer}:hover & {
    opacity: 1;
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.colors.background_deep_00};
    border: 1px solid ${({ theme }) => theme.colors.background_deep_00};
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

export const ProductInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.primary_text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const ProductDescription = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.secondary_text};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductPriceContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;
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
  background-color: ${({ theme }) => theme.colors.danger};
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 2.5px 5px;
  border-radius: 4px;
  position: absolute;
  right: 0;
`;
