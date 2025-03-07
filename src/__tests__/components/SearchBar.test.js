import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../../components/SearchBar";
import { ThemeProvider } from "styled-components";
import { mockTheme } from "../../utils/mockTheme";


const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

describe("SearchBar Component", () => {
  test("should render the search input", () => {
    renderWithTheme(<SearchBar />);
    
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("should call onChange when typing", () => {
    const handleChange = jest.fn();
    renderWithTheme(<SearchBar onChange={handleChange} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
