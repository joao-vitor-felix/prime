"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui";
import { debounce } from "@/helpers/debouce";

type SearchboxProps = {
  name: string;
};

export const Searchbox = ({ name }: SearchboxProps) => {
  const router = useRouter();
  const queryParams = new URLSearchParams(location.search);

  const debouncedNavigate = debounce(() => {
    const params = queryParams.toString();
    router.push(`/search?${params}`);
  }, 500);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;

    if (name.length === 0) {
      queryParams.delete("name");
    } else {
      queryParams.set("name", name);
    }

    debouncedNavigate();
  };

  return (
    <div className="relative flex">
      <label htmlFor="search" className="absolute left-1 self-center">
        <Search className="size-6 text-primary" />
      </label>
      <Input
        placeholder="Pesquise aqui"
        className="pl-8"
        id="search"
        defaultValue={name}
        onChange={event => handleOnChange(event)}
      />
    </div>
  );
};
