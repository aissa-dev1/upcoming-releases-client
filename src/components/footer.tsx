import Container from "./container";
import { P } from "./typography";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center text-center bg-foreground text-background h-[var(--footer-height)] footer__safe__area py-4">
      <Container>
        <P>Upcoming Releases &copy; {new Date().getFullYear()}</P>
      </Container>
    </footer>
  );
}
