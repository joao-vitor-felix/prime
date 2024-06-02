"use client";

import {
  Heart,
  Home,
  Library,
  LogIn,
  LogOut,
  Percent,
  ShoppingBasket
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Separator
} from "@/components/ui";

import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const { data, status } = useSession();

  const isUserAuthenticated = status === "authenticated";

  const handleLoginClick = async () => await signIn();
  const handleLogoutClick = async () => await signOut();

  const userNameFirstLetter = data?.user?.name?.split("")[0];

  return (
    <div className="flex flex-col gap-3">
      {isUserAuthenticated && (
        <div className="flex items-center gap-2">
          <Avatar>
            {data?.user?.image && (
              <AvatarImage src={data.user.image} alt="Imagem da sua conta" />
            )}
            <AvatarFallback>{userNameFirstLetter}</AvatarFallback>
          </Avatar>
          <h3 className="font-bold">{data?.user?.name}</h3>
        </div>
      )}

      <Separator className="my-2" />

      {!isUserAuthenticated && (
        <Button
          variant="outline"
          className="flex gap-2"
          onClick={handleLoginClick}
          aria-label="Entrar na sua conta"
        >
          <LogIn size={18} className="text-primary" /> Entrar
        </Button>
      )}

      <MenuItem
        href="/"
        icon={<Home size={18} className="text-primary" />}
        linkChildren="Início"
        aria-label="Página inicial"
      />

      <MenuItem
        href="/deals"
        icon={<Percent size={18} className="text-primary" />}
        linkChildren="Ofertas"
        aria-label="Ofertas disponíveis"
      />

      <MenuItem
        href="/category"
        icon={<Library size={18} className="text-primary" />}
        linkChildren="Categorias"
        aria-label="Categorias de produtos"
      />

      {isUserAuthenticated && (
        <>
          <MenuItem
            href="/orders"
            icon={<ShoppingBasket size={18} className="text-primary" />}
            linkChildren="Pedidos"
            aria-label="Meus pedidos"
          />
          <MenuItem
            href="#"
            icon={<Heart size={18} className="text-primary" />}
            linkChildren="Lista de desejos"
            aria-label="Lista de desejos"
          />

          <Button
            variant="outline"
            className="flex gap-2"
            onClick={handleLogoutClick}
            aria-label="Sair da conta"
          >
            <LogOut size={18} className="text-primary" /> Sair
          </Button>
        </>
      )}
    </div>
  );
};
