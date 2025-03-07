"use client"

import React, { useState } from 'react';
import * as S from './styles';
import { ProductCardProps } from '@/types/product';
import Link from 'next/link';
import formatImageUrl from '@/utils/formatImageUrl';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [imageUrl, setImageUrl] = useState(() => {
        return product.image ? formatImageUrl(product.image) : "/default-product-image.png";
    });

    const handleImageError = () => {
        setImageUrl("/default-product-image.png");
    };

    return (
        <S.ProductCardContainer>
            <Link href={`/products/${product.id}`} passHref>
                <S.ProductImageContainer>
                    {product.popular && <S.ProductBadge $type="popular"> Popular</S.ProductBadge>}
                    {product.onSale && <S.ProductBadge $type="onSale"> Promotion</S.ProductBadge>}
                    <S.ProductImage
                        src={imageUrl}
                        alt={product.title}
                        width={200}
                        height={200}
                        onError={handleImageError}
                        loading="lazy"
                    />
                    <S.ViewText>VIEW</S.ViewText>
                </S.ProductImageContainer>
            </Link>

            <S.ProductInfo>
                <S.ProductTitle>{product.title}</S.ProductTitle>

                <S.ProductPriceContainer>
                    {product.discount && (
                        <>
                            <S.OriginalPrice>${product.price.toFixed(2)}</S.OriginalPrice>
                            <S.DiscountedPrice>${(product.price * (1 - product.discount / 100)).toFixed(2)}</S.DiscountedPrice>
                        </>
                    )}

                    {!product.discount && <S.ProductPrice>${product.price.toFixed(2)}</S.ProductPrice>}

                    {product.discount && <S.ProductDiscount>{product.discount}% OFF</S.ProductDiscount>}
                </S.ProductPriceContainer>


                <S.ProductDescription>{product.description}</S.ProductDescription>
            </S.ProductInfo>
        </S.ProductCardContainer>
    );
};

export default ProductCard;