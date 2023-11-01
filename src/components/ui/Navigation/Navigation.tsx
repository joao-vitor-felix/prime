"use client";

import {
  BadgeCheck,
  HomeIcon,
  Library,
  LogInIcon,
  LogOut,
  MenuIcon,
  PackageSearch,
  PercentIcon,
  ShoppingCartIcon
} from "lucide-react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../Sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import { Separator } from "../Separator";
import Link from "next/link";

const Navigation = () => {
  const { status, data } = useSession();
  const handleLogin = async () => await signIn();
  const handleLogout = async () => await signOut();

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Abrir o menu">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col px-12">
          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="mb-2 flex items-center gap-2 py-2">
                <Avatar>
                  <AvatarFallback>
                    {data?.user?.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && (
                    <AvatarImage
                      src={data.user.image}
                      className="self-center"
                    />
                  )}
                </Avatar>
                {data.user.name && (
                  <span
                    className={
                      data.user.name.length > 10 ? `text-sm` : `text-base`
                    }
                  >
                    {data?.user?.name}
                  </span>
                )}
              </div>
              <Separator className="mb-2" />
            </div>
          )}
          <SheetClose className="flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                variant="outline"
                className="w-full gap-2"
                onClick={handleLogin}
              >
                <LogInIcon size={20} className="text-primary" />
                Fazer login
              </Button>
            )}

            <Button variant="outline" className="w-full gap-2">
              <HomeIcon size={20} className="text-primary" />
              <Link href="/">Início</Link>
            </Button>

            {status === "authenticated" && (
              <Button variant="outline" className="w-full gap-2">
                <PackageSearch size={20} className="text-primary" />
                Pedidos
              </Button>
            )}

            <Button variant="outline" className="w-full gap-2">
              <PercentIcon size={20} className="text-primary" />
              Ofertas
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Library size={20} className="text-primary" />
              Catálogo
            </Button>
            {status === "authenticated" && (
              <Button
                variant="outline"
                className="w-full gap-2"
                onClick={handleLogout}
              >
                <LogOut size={20} className="text-primary" />
                Sair da conta
              </Button>
            )}
          </SheetClose>
        </SheetContent>
      </Sheet>

      <Link href="/" className="flex items-center gap-1 text-xl font-semibold">
        <span className="text-primary">
          <BadgeCheck size={24} />{" "}
        </span>
        Prime
      </Link>

      <Button size="icon" variant="outline" aria-label="Abrir o carrinho">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Navigation;
