import { ReleaseCategoryContainerProps } from "@/components/pages/home/release-category-container";
import { random } from "@/utils/random";

export const gamesReleasesData: ReleaseCategoryContainerProps[] = [
  {
    heading: "Jan, 2025",
    categoryList: [
      {
        id: random.strongIdWithoutSymbols(),
        title: "Clash of Clans",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
      {
        id: random.strongIdWithoutSymbols(),
        title: "Clash Royale",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
    ],
  },
  {
    heading: "Feb, 2025",
    categoryList: [
      {
        id: random.strongIdWithoutSymbols(),
        title: "Clash of Clans",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
      {
        id: random.strongIdWithoutSymbols(),
        title: "Clash Royale",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
    ],
  },
  {
    heading: "Mar, 2025",
    categoryList: [
      {
        id: random.strongIdWithoutSymbols(),
        title: "Clash of Clans",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
      {
        id: random.strongIdWithoutSymbols(),
        title: "Clash Royale",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
    ],
  },
];

export const moviesReleasesData: ReleaseCategoryContainerProps[] = [
  {
    heading: "Jan, 2025",
    categoryList: [
      {
        id: random.strongIdWithoutSymbols(),
        title: "The 500 days of summer",
        description: "Romantic",
        category: "movies",
        tags: ["Movies slayer"],
      },
    ],
  },
];

export const animeReleasesData: ReleaseCategoryContainerProps[] = [
  {
    heading: "Jan, 2025",
    categoryList: [
      {
        id: random.strongIdWithoutSymbols(),
        title: "Death Note",
        description: "Psychological",
        category: "anime",
        tags: ["Anime slayer"],
      },
    ],
  },
];
