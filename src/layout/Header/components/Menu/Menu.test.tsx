import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { SessionContextValue, useSession } from "next-auth/react";

import Menu from "./Menu";

jest.mock("next-auth/react");

function renderComponent() {
  render(<Menu />);

  const loginButton = screen.queryByRole("button", {
    name: /entrar na sua conta/i
  });
  const homeLink = screen.getByRole("link", { name: /página inicial/i });
  const offerLink = screen.getByRole("link", { name: /ofertas disponíveis/i });
  const catalogLink = screen.getByRole("link", {
    name: /catálogo de produtos/i
  });

  const ordersLink = screen.queryByRole("link", { name: /meus pedidos/i });
  const wishlistLink = screen.queryByRole("link", {
    name: /lista de desejos/i
  });
  const logoutButton = screen.queryByRole("button", {
    name: /sair da conta/i
  });

  return {
    loginButton,
    homeLink,
    offerLink,
    catalogLink,
    ordersLink,
    wishlistLink,
    logoutButton
  };
}

describe("Menu", () => {
  it("should not display authenticated links while user is logged out", () => {
    (useSession as jest.Mock<SessionContextValue>).mockReturnValue({
      status: "unauthenticated",
      data: null,
      update: jest.fn()
    });

    const {
      loginButton,
      homeLink,
      offerLink,
      catalogLink,
      ordersLink,
      wishlistLink,
      logoutButton
    } = renderComponent();

    expect(loginButton).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(offerLink).toBeInTheDocument();
    expect(catalogLink).toBeInTheDocument();
    expect(ordersLink).not.toBeInTheDocument();
    expect(wishlistLink).not.toBeInTheDocument();
    expect(logoutButton).not.toBeInTheDocument();
  });

  it("should display the authenticated links and user data while user is logged out", async () => {
    (useSession as jest.Mock<SessionContextValue>).mockReturnValue({
      status: "authenticated",
      data: {
        user: {
          name: "John Doe",
          email: "johndoe@john.com",
          image: "https://john.com/john"
        },
        expires: "2021-12-31T12:00:00.000Z"
      },
      update: jest.fn()
    });

    const {
      homeLink,
      offerLink,
      catalogLink,
      ordersLink,
      wishlistLink,
      logoutButton,
      loginButton
    } = renderComponent();

    const userName = screen.getByRole("heading", { name: /john doe/i });
    //FIXME: Imagem não está sendo exibida
    // await screen.findByAltText(/imagem da sua conta/i);

    expect(loginButton).not.toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(offerLink).toBeInTheDocument();
    expect(catalogLink).toBeInTheDocument();
    expect(ordersLink).toBeInTheDocument();
    expect(wishlistLink).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });
  // expect(userImage).toBeInTheDocument();
});
