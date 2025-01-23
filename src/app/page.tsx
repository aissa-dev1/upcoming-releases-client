import Container from "@/components/reusable/container";
import NavBar from "@/components/reusable/nav-bar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container className="pt-[calc(var(--navbar-height)*1.25)]">
        <p>Hello world!</p>
      </Container>
    </>
  );
}
