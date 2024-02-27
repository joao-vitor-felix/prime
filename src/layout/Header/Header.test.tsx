import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SessionContextValue, useSession } from "next-auth/react";

import Header from "./Header";

jest.mock("next-auth/react");

const renderComponent = () => {
  render(<Header />);

  const menu = screen.getByRole("button", { name: /abrir menu/i });

  return { menu };
};

describe("Header", () => {
  it("should open the Menu when button is clicked", async () => {
    (useSession as jest.Mock<SessionContextValue>).mockReturnValue({
      status: "unauthenticated",
      data: null,
      update: jest.fn()
    });

    const { menu } = renderComponent();

    await userEvent.click(menu);
    const loginButton = screen.getByRole("button", {
      name: /entrar na sua conta/i
    });
    const homeLink = screen.getByRole("link", { name: /página inicial/i });
    const offerLink = screen.getByRole("link", {
      name: /ofertas disponíveis/i
    });
    const catalogLink = screen.getByRole("link", {
      name: /catálogo de produtos/i
    });
    expect(loginButton).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(offerLink).toBeInTheDocument();
    expect(catalogLink).toBeInTheDocument();
  });

  //TODO: Adicionar teste do carrinho de compras
});
