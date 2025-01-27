"use client";

import { Button } from "@/components/button";
import Container from "@/components/container";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { ReleaseCategoryProps } from "@/components/pages/home/release-category";
import { H3, P } from "@/components/typography";
import { animeReleasesData } from "@/data/releases-data";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AnimeReleasePage() {
  const { id } = useParams();
  const router = useRouter();
  const [animeRelease, setAnimeRelease] = useState<ReleaseCategoryProps>();

  function checkAnimeReleaseExists() {
    let found = false;

    for (const release of animeReleasesData) {
      if (typeof release.categoryList === "undefined") continue;

      for (const category of release.categoryList) {
        if (category.id === id) {
          setAnimeRelease(category);
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
    checkAnimeReleaseExists();
  }, [id, router]);

  if (!animeRelease) return null;

  return (
    <>
      <NavBar />
      <Container className="flex flex-col gap-lg header__safe__area">
        <Link href="/" className="w-fit">
          <Button>Home</Button>
        </Link>
        <div className="flex flex-col gap-sm">
          <H3>{animeRelease.title}</H3>
          <P>{animeRelease.description}</P>
        </div>
      </Container>
      <Footer />
    </>
  );
}
