import { ProductPageProps } from "@/types/product";
import { fetchProduct } from "@/services/productService";
import Link from "next/link";

const ProductPage = async ({ params }: ProductPageProps) => {
    if (!params?.id) {
        throw new Error("ID do produto não encontrado");
    }

    const product = await fetchProduct(params.id);

    return (
        <div>
            <Link href={"/products"}>Voltar</Link>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Preço: ${product.price}</p>
            <p>Categoria: {product.category}</p>
        </div>
    );
};

export default ProductPage;
