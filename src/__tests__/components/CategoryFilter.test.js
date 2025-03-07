import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../../components/CategoryFilter";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "../../utils/mockTheme";

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

describe("CategoryFilter Component", () => {
  const mockCategories = ["electronics", "clothing", "furniture"];
  const mockOnChange = jest.fn();

  it("should render the category filter with options", () => {
    renderWithTheme(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory="all"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText("All Categories")).toBeInTheDocument();

    mockCategories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("should call onChange when a category is selected", () => {
    renderWithTheme(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory="all"
        onChange={mockOnChange}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "electronics" },
    });

    expect(mockOnChange).toHaveBeenCalledWith("electronics");
  });

  it("should handle the 'all' category when no category is selected", () => {
    renderWithTheme(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory="all"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByRole("combobox").value).toBe("all");
  });
});
