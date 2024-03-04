"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavList({ name, route }: { name: string; route: string }) {
  const pathname = usePathname();
  return (
    <li className="w-32 text-center text-2xl tracking-tight font-medium scroll-m-20 max-sm:w-full max-sm:hover:bg-accent">
      <Link
        href={route}
        className={
          pathname === route
            ? "p-1.5 h-full grid place-items-center border-b-2 font-semibold border-destructive max-sm:border-none max-sm:text-destructive"
            : "p-1.5 h-full grid place-items-center"
        }
        prefetch={false}
      >
        {name}
      </Link>
    </li>
  );
}
