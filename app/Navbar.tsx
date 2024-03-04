import { NavList } from "./NavList";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  return (
    <header className="w-full flex items-center">
      <nav className="w-64 mt-16 h-full mx-auto max-sm:w-full">
        <ul className="flex justify-between items-center h-full list-none max-sm:flex-col max-sm:w-full">
          <NavList name={"Home"} route={"/"} />
          <NavList name={"About Me"} route={"/about"} />
        </ul>
      </nav>
      <div className="absolute right-14 max-sm:top-6 max-sm:right-7">
        <ModeToggle />
      </div>
    </header>
  );
}
