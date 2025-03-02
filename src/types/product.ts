// Interface completa de um produto
export interface Product {
  id: number;             // Identificador único do produto
  title: string;          // Nome do produto
  image: string;          // URL da imagem do produto
  price: number;          // Preço do produto
  description: string;    // Descrição detalhada do produto
  brand: string;          // Marca do produto
  model: string;          // Modelo do produto
  color: string;          // Cor do produto
  category: string;       // Categoria do produto (ex.: áudio, gaming, eletrodomésticos)
  discount?: number;      // Desconto aplicado ao produto (opcional)
  popular?: boolean;      // Indica se o produto é popular (opcional)
  onSale?: boolean;       // Indica se o produto está em promoção (opcional)
}

// Interface para as props da página de detalhes do produto
export interface ProductPageProps {
  params: {
    id: string;
  };
}

// Interface para as props do componente ProductList
export interface ProductListProps {
  products: Product[];
}

// Interface para as props do componente ProductCard
export interface ProductCardProps {
  product: Product;
}
