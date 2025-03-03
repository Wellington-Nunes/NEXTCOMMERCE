/**
 * Testes para a página HomePage, que verifica o comportamento de redirecionamento.
 */
import { render } from "@testing-library/react";
import HomePage from "../../app/page";

import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("HomePage Page", () => {
  /**
   * Verifica se o redirecionamento para /products é feito corretamente.
   *
   * Este teste garante que, ao renderizar a página HomePage, o usuário
   * seja redirecionado para a página /products usando o router.push.
   */
  it("deve redirecionar para /products", () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({
      push: pushMock,
    });

    render(<HomePage />);

    expect(pushMock).toHaveBeenCalledWith("/products");
  });

  /**
   * Verifica se a página HomePage não renderiza conteúdo.
   *
   * Este teste garante que o componente HomePage não renderiza nada na tela
   * após o redirecionamento.
   */
  it("não deve renderizar conteúdo", () => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    const { container } = render(<HomePage />);

    expect(container.firstChild).toBeNull();
  });
});
