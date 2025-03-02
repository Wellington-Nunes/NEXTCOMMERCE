import ProductList from "@/components/ProductList";
import { fetchProducts } from "@/services/productService";

const ProductsPage = async () => {
    const products = await fetchProducts();

    return (
        <ProductList products={products} />
    );
};

export default ProductsPage;
