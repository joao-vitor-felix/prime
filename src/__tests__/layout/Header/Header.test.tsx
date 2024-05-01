import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockAuthState } from "@/__tests__/utils/mockAuthState";

import { Header } from "../../../layout/Header/Header";

const renderComponent = () => {
  render(<Header />);

  const menu = screen.getByRole("button", { name: /menu/i });
  const cart = screen.getByRole("button", { name: /carrinho de compras/i });

  return { menu, cart };
};

describe("Header", () => {
  it("should open the Menu when button is clicked", async () => {
    mockAuthState({
      data: null,
      update: vi.fn(),
      status: "unauthenticated"
    });

    const { menu } = renderComponent();

    await userEvent.click(menu);
    const loginButton = screen.getByRole("button", {
      name: /entrar na sua conta/i
    });
    const homeLink = screen.getByRole("link", { name: /página inicial/i });
    const offerLink = screen.getByRole("link", {
      name: /ofertas/i
    });
    const catalogLink = screen.getByRole("link", {
      name: /categorias/i
    });
    expect(loginButton).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(offerLink).toBeInTheDocument();
    expect(catalogLink).toBeInTheDocument();
  });

  it("should open the Cart when button is clicked", async () => {
    const { cart } = renderComponent();

    await userEvent.click(cart);

    const cartTitle = screen.getByRole("heading", {
      name: /carrinho/i
    });

    const cartContent = screen.getByText(/Não há produtos no carrinho./i);
    expect(cartTitle).toBeInTheDocument();
    expect(cartContent).toBeInTheDocument();
  });
});
