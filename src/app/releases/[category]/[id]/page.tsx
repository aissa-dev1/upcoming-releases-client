"use client";

import { Button } from "@/components/button";
import Container from "@/components/container";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { ReleaseCategoryProps } from "@/components/releases/release-category";
import { H3, P } from "@/components/typography";
import {
  ReleaseCategoryType,
  releasesCategories,
  releasesData,
} from "@/data/releases-data";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReleasePage() {
  const { category, id } = useParams();
  const router = useRouter();
  const [release, setRelease] = useState<ReleaseCategoryProps>();

  function checkReleaseExists() {
    let found = false;

    if (!releasesCategories.includes(category as ReleaseCategoryType)) {
      router.push("/");
      return;
    }

    for (const releaseItem of releasesData[category as ReleaseCategoryType]) {
      if (typeof releaseItem.categoryList === "undefined") continue;

      for (const categoryItem of releaseItem.categoryList) {
        if (categoryItem.id === id) {
          setRelease(categoryItem);
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
    checkReleaseExists();
  }, [id, router]);

  if (!release) return null;

  return (
    <>
      <NavBar />
      <Container className="flex flex-col gap-lg header__safe__area">
        <Link href="/" className="w-fit">
          <Button>Home</Button>
        </Link>
        <div className="flex flex-col gap-sm">
          <H3>{release.title}</H3>
          <P>{release.description}</P>
        </div>
      </Container>
      <Footer />
    </>
  );
}
