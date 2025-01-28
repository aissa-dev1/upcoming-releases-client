"use client";

import TabList from "@/components/tab-list";
import { useEffect, useState } from "react";
import Releases from "@/components/releases/releases";
import {
  animeReleasesData,
  gamesReleasesData,
  moviesReleasesData,
} from "@/data/releases-data";

const releasesTabs = [
  { value: "games", content: "Games" },
  { value: "movies", content: "Movies" },
  { value: "anime", content: "Anime" },
];

export default function ReleasesTabList() {
  const [tabValue, setTabValue] = useState("games");

  function getStoredTabValue() {
    const storedTabValue = localStorage.getItem("tab-value");

    if (storedTabValue) {
      setTabValue(storedTabValue);
    }
  }

  useEffect(() => {
    getStoredTabValue();
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
      {tabValue === "games" && <Releases list={gamesReleasesData} />}
      {tabValue === "movies" && <Releases list={moviesReleasesData} />}
      {tabValue === "anime" && <Releases list={animeReleasesData} />}
    </>
  );
}
