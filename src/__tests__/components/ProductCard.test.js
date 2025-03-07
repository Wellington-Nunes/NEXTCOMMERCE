import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ProductCard from "../../components/ProductCard";
import { mockTheme } from "../../utils/mockTheme";
import { ThemeProvider } from "styled-components";

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => (
    <img 
      {...props} 
      src={props.src} 
      alt={props.alt || "Product image"} 
      data-testid="next-image"
    />
  ),
}));

describe("ProductCard Component", () => {
  const mockProduct = {
    id: 1,
    title: "Product A",
    description: "Description A",
    price: 100,
    image: "https://example.com/product-a.jpg",
    popular: true,
    onSale: false,
    discount: 10,
  };

  const renderWithTheme = (component) => {
    return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
  };

  it("should render the product card correctly", () => {
    renderWithTheme(<ProductCard product={mockProduct} />);
  
    expect(screen.getByText("Product A")).toBeInTheDocument();
    expect(screen.getByText("Description A")).toBeInTheDocument();
    expect(screen.getByText("$100.00")).toBeInTheDocument();
    expect(screen.getByText("10% OFF")).toBeInTheDocument();
    expect(screen.getByText("$90.00")).toBeInTheDocument();
    expect(screen.getByText("Popular")).toBeInTheDocument();
  
    const imageElement = screen.getByTestId("next-image");
    expect(imageElement).toHaveAttribute(
      "src",
      expect.stringContaining(mockProduct.image)
    );
  });
  
  it("should display a default image if the product image fails to load", async () => {
    renderWithTheme(<ProductCard product={{ ...mockProduct, image: "" }} />);

    const imageElement = screen.getByTestId("next-image");
    await act(async () => {
      fireEvent.error(imageElement);
    });

    expect(imageElement).toHaveAttribute(
      "src",
      expect.stringContaining("/default-product-image.png")
    );
  });

  it("should redirect to the product detail page when clicking on the image or title", () => {
    renderWithTheme(<ProductCard product={mockProduct} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/products/1");

    fireEvent.click(linkElement);
  });

  it("should not display the 'Popular' badge if the product is not popular", () => {
    renderWithTheme(
      <ProductCard product={{ ...mockProduct, popular: false }} />
    );

    expect(screen.queryByText("Popular")).not.toBeInTheDocument();
  });

  it("should display the 'Promotion' badge if the product is on sale", () => {
    renderWithTheme(<ProductCard product={{ ...mockProduct, onSale: true }} />);

    expect(screen.getByText("Promotion")).toBeInTheDocument();
  });
});
