import { Product } from "@/types/product";

const API_URL = "https://fakestoreapi.in/api";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error("Erro ao carregar produtos");
  }
  const data = await response.json();
  return data.products;
};

export const fetchProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error("Erro ao carregar produto");
  }
  const data = await response.json();
  return data.product;
};

export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/products/category`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
