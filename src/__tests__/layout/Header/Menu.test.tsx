import { render, screen } from "@testing-library/react";

import { mockAuthState } from "@/__tests__/utils/mockAuthState";
import { Sheet } from "@/components/ui";

import { Menu } from "../../../layout/Header/components/Menu";

function renderComponent() {
  render(
    <Sheet>
      <Menu />;
    </Sheet>
  );

  const loginButton = screen.queryByRole("button", {
    name: /entrar na sua conta/i
  });
  const homeLink = screen.getByRole("link", { name: /página inicial/i });
  const offerLink = screen.getByRole("link", {
    name: /ofertas/i
  });
  const catalogLink = screen.getByRole("link", {
    name: /categorias/i
  });

  const ordersLink = screen.queryByRole("link", { name: /meus pedidos/i });
  // const wishlistLink = screen.queryByRole("link", {
  //   name: /lista de desejos/i
  // });
  const logoutButton = screen.queryByRole("button", {
    name: /sair da conta/i
  });

  return {
    loginButton,
    homeLink,
    offerLink,
    catalogLink,
    ordersLink,
    // wishlistLink,
    logoutButton
  };
}

describe("Menu", () => {
  it("should not display authenticated links while user is logged out", () => {
    mockAuthState({
      data: null,
      update: vi.fn(),
      status: "unauthenticated"
    });

    const {
      loginButton,
      homeLink,
      offerLink,
      catalogLink,
      ordersLink,
      // wishlistLink,
      logoutButton
    } = renderComponent();

    expect(loginButton).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(offerLink).toBeInTheDocument();
    expect(catalogLink).toBeInTheDocument();
    expect(ordersLink).not.toBeInTheDocument();
    // expect(wishlistLink).not.toBeInTheDocument();
    expect(logoutButton).not.toBeInTheDocument();
  });

  it("should display the authenticated links and user data while user is logged out", async () => {
    mockAuthState({
      data: {
        user: {
          id: "1",
          email: "john@john.com",
          image: "https://john.com/john.jpg",
          name: "John Doe"
        },
        expires: "2023-10-10T00:00:00.000Z"
      },
      update: vi.fn(),
      status: "authenticated"
    });

    const {
      homeLink,
      offerLink,
      catalogLink,
      ordersLink,
      // wishlistLink,
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
    // expect(wishlistLink).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });
  // expect(userImage).toBeInTheDocument();
});
