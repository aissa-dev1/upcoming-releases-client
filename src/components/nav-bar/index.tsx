import Bars3Icon from "@/components/icons/outline/bars3";
import NavBarSearchContainer from "./search-container";
import Container from "../container";

export default function NavBar() {
  return (
    <nav className="fixed w-full flex items-center bg-foreground text-background h-[var(--navbar-height)]">
      <Container className="flex items-center gap-4">
        <p className="capitalize shrink-0">Upcoming releases</p>
        <NavBarSearchContainer />
        <button className="bg-background text-foreground py-1.5 px-2 rounded-md text-sm font-bold uppercase active:scale-95">
          <Bars3Icon />
        </button>
      </Container>
    </nav>
  );
}
