"use client";

import { Button } from "@/components/button";
import Container from "@/components/container";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { ReleaseCategoryProps } from "@/components/pages/home/release-category";
import { H3, P } from "@/components/typography";
import { gamesReleasesData } from "@/data/releases-data";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GameReleasePage() {
  const { id } = useParams();
  const router = useRouter();
  const [gameRelease, setGameRelease] = useState<ReleaseCategoryProps>();

  function checkGameReleaseExists() {
    let found = false;

    for (const release of gamesReleasesData) {
      if (typeof release.categoryList === "undefined") continue;

      for (const category of release.categoryList) {
        if (category.id === id) {
          setGameRelease(category);
          found = true;
          break;
        }
      }
      if (found) break;
    }

    if (!found) {
      router.push("/");
    }
  }

  useEffect(() => {
    checkGameReleaseExists();
  }, [id, router]);

  if (!gameRelease) return null;

  return (
    <>
      <NavBar />
      <Container className="flex flex-col gap-lg header__safe__area">
        <Link href="/" className="w-fit">
          <Button>Home</Button>
        </Link>
        <div className="flex flex-col gap-sm">
          <H3>{gameRelease.title}</H3>
          <P>{gameRelease.description}</P>
        </div>
      </Container>
      <Footer />
    </>
  );
}
