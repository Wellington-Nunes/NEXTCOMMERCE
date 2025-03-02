import { fetchProducts } from "@/services/productService";
import Link from "next/link";

const ProductsPage = async () => {
    const products = await fetchProducts();

    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <Link href={`/products/${product.id}`}>Ver produto</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
