import ProductList from "@/components/ProductList";
import { fetchCategories, fetchProducts } from "@/services/productService";

const ProductsPage = async () => {
    const [products, categories] = await Promise.all([
        fetchProducts(),
        fetchCategories(),
    ]);

    return (
        <ProductList
            products={products}
            categories={categories}
        />);
};

export default ProductsPage;
