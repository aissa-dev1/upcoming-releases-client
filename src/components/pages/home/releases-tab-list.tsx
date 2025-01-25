"use client";

import TabList from "@/components/tab-list";
import { useEffect, useState } from "react";
import GameReleases from "./game-releases";
import MoviesReleases from "./movies-releases";
import AnimeReleases from "./anime-releases";

const releasesTabs = [
  { value: "games", content: "Games" },
  { value: "movies", content: "Movies" },
  { value: "anime", content: "Anime" },
];

export default function ReleasesTabList() {
  const [tabValue, setTabValue] = useState("games");

  useEffect(() => {
    const storedTabValue = localStorage.getItem("tab-value");

    if (storedTabValue) {
      setTabValue(storedTabValue);
    }
  }, []);

  return (
    <>
      <TabList
        tabs={releasesTabs}
        value={tabValue}
        onValueChange={(value) => {
          setTabValue(value);
          localStorage.setItem("tab-value", value);
        }}
      />
      {tabValue === "games" && <GameReleases />}
      {tabValue === "movies" && <MoviesReleases />}
      {tabValue === "anime" && <AnimeReleases />}
    </>
  );
}
