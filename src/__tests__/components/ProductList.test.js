import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import ProductList from "../../components/ProductList";
import { mockTheme } from "../../utils/mockTheme";

describe("ProductList Component", () => {
  const mockProducts = [
    {
      id: 1,
      title: "Product A",
      description: "Description A",
      price: 100,
      image: "https://example.com/product-a.jpg",
      category: "electronics",
      brand: "Brand A",
      model: "Model A",
      color: "Black",
    },
    {
      id: 2,
      title: "Product B",
      description: "Description B",
      price: 200,
      image: "https://example.com/product-b.jpg",
      category: "clothing",
      brand: "Brand B",
      model: "Model B",
      color: "White",
    },
  ];

  const mockCategories = ["electronics", "clothing"];

  const renderWithTheme = (component) => {
    return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
  };


  it("should render the product list", () => {
    renderWithTheme(
      <ProductList products={mockProducts} categories={mockCategories} />
    );

    expect(screen.getByText("Product A")).toBeInTheDocument();
    expect(screen.getByText("Description A")).toBeInTheDocument();
    expect(screen.getByText("$100.00")).toBeInTheDocument();

    expect(screen.getByText("Product B")).toBeInTheDocument();
    expect(screen.getByText("Description B")).toBeInTheDocument();
    expect(screen.getByText("$200.00")).toBeInTheDocument();
  });

  it('should display the message "No products found" when the list is empty', () => {
    renderWithTheme(<ProductList products={[]} categories={mockCategories} />);
    expect(screen.getByText("No products found")).toBeInTheDocument();
  });
});
