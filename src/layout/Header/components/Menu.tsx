"use client";

import {
  Box,
  Heart,
  Home,
  Library,
  LogIn,
  LogOut,
  Percent
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Separator
} from "@/components/ui";

import MenuItem from "./MenuItem";

const Menu = () => {
  const { data, status } = useSession();

  const isUserAuthenticated = status === "authenticated";

  const handleLoginClick = async () => await signIn();
  const handleLogoutClick = async () => await signOut();

  return (
    <div className="flex flex-col gap-3">
      {isUserAuthenticated && (
        <div className="flex items-center gap-2">
          <Avatar>
            {data?.user?.image && <AvatarImage src={data.user.image} />}
            <AvatarFallback>{data?.user?.name?.split("")[0]}</AvatarFallback>
          </Avatar>
          <h3 className="font-bold">{data?.user?.name}</h3>
        </div>
      )}

      <Separator className="mb-2 mt-2" />

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
        aria-label="Navegue até a página inicial"
      />

      <MenuItem
        href="#"
        icon={<Percent size={18} className="text-primary" />}
        linkChildren="Ofertas"
        aria-label="Navegue até as ofertas disponíveis"
      />

      <MenuItem
        href="#"
        icon={<Library size={18} className="text-primary" />}
        linkChildren="Catálogo"
        aria-label="Navegue até o catálogo de produtos"
      />

      {isUserAuthenticated && (
        <>
          <MenuItem
            href="#"
            icon={<Box size={18} className="text-primary" />}
            linkChildren="Pedidos"
            aria-label="Navegue até o seus pedidos"
          />
          <MenuItem
            href="#"
            icon={<Heart size={18} className="text-primary" />}
            linkChildren="Lista de desejos"
            aria-label="Navegue até a lista de desejos"
          />

          <Button
            variant="outline"
            className="flex gap-2"
            onClick={handleLogoutClick}
            aria-label="Sair da sua conta"
          >
            <LogOut size={18} className="text-primary" /> Sair
          </Button>
        </>
      )}
    </div>
  );
};

export default Menu;
