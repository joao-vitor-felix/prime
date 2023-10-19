import { screen, render } from "@testing-library/react";
import Navigation from "./Navigation";
import { useSession } from "next-auth/react";
import userEvent from "@testing-library/user-event";
import { Session } from "next-auth";

jest.mock("next-auth/react");

describe("Navigation", () => {
  it("should render the Navigation by default", async () => {
    (useSession as jest.Mock).mockReturnValue({
      status: "unauthenticated",
      data: undefined
    });
    render(<Navigation />);
    const menu = screen.getByLabelText("Abrir o menu");
    await userEvent.click(menu);
    const login = screen.getByText("Fazer login");
    const home = screen.getByText("Início");
    const orders = screen.queryByText("Pedidos");
    const logout = screen.queryByText("Sair da conta");
    expect(login).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(orders).not.toBeInTheDocument();
    expect(logout).not.toBeInTheDocument();
  });

  it("should render the Navigation with authenticated user", async () => {
    const mockSession: Session = {
      expires: "1",
      user: { email: "a", name: "Delta", image: "http://www.google.com" }
    };

    (useSession as jest.Mock).mockReturnValue({
      status: "authenticated",
      data: mockSession
    });

    render(<Navigation />);
    const menu = screen.getByLabelText("Abrir o menu");
    await userEvent.click(menu);
    const login = screen.queryByText("Fazer login");
    const orders = screen.getByText("Pedidos");
    const logout = screen.getByText("Sair da conta");
    const user = screen.getByText("Delta");
    expect(login).not.toBeInTheDocument();
    expect(orders).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
    expect(user).toBeInTheDocument();
  });
});
