import { fetchProduct } from "@/services/productService";
import * as S from "./styles";
import { ProductPageProps } from "@/types/product";


const ProductPage = async ({ params }: { params: ProductPageProps }) => {
    const { id } = await params

    if (!id) {
        throw new Error("ID do produto não encontrado");
    }

    const product = await fetchProduct(id);

    return (
        <S.ProductDetailContainer>
            <S.BackLink href="/products">Voltar</S.BackLink>
            <S.ProductDetailContent>
                <S.ProductImageContainer>
                    {product.popular && <S.ProductBadge $type="popular"> Popular</S.ProductBadge>}
                    {product.onSale && <S.ProductBadge $type="onSale"> Promotion</S.ProductBadge>}
                    <S.ProductImage
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        loading="lazy"
                        className="zoom"
                    />
                </S.ProductImageContainer>
                <S.ProductInfoContainer>
                    <S.ProductTitle>{product.title}</S.ProductTitle>
                    <S.ProductDescription>{product.description}</S.ProductDescription>
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

                    <S.ProductCategory>Category: {product.category}</S.ProductCategory>
                </S.ProductInfoContainer>
            </S.ProductDetailContent>
        </S.ProductDetailContainer>
    );
};

export default ProductPage;
