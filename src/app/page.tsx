import Container from "@/components/container";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import ReleasesTabList from "@/components/pages/home/releases-tab-list";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container className="flex flex-col gap-lg header__safe__area">
        <ReleasesTabList />
      </Container>
      <Footer />
    </>
  );
}
