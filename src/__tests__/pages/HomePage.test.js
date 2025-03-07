import { render } from "@testing-library/react";
import HomePage from "../../app/page";

import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("HomePage Page", () => {
  it("should redirect to /products", () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({
      push: pushMock,
    });

    render(<HomePage />);

    expect(pushMock).toHaveBeenCalledWith("/products");
  });

  it("should not render content", () => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    const { container } = render(<HomePage />);

    expect(container.firstChild).toBeNull();
  });
});
