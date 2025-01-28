import { ReleaseCategoryContainerProps } from "@/components/releases/release-category-container";

export const gamesReleasesData: ReleaseCategoryContainerProps[] = [
  {
    id: "1",
    heading: "Jan, 2025",
    categoryList: [
      {
        id: "1",
        title: "Clash of Clans",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
      {
        id: "2",
        title: "Clash Royale",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
    ],
  },
  {
    id: "2",
    heading: "Feb, 2025",
    categoryList: [
      {
        id: "3",
        title: "Clash of Clans",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
      {
        id: "4",
        title: "Clash Royale",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
    ],
  },
  {
    id: "3",
    heading: "Mar, 2025",
    categoryList: [
      {
        id: "5",
        title: "Clash of Clans",
        description: "Strategy",
        category: "games",
        tags: ["Google play", "App store"],
      },
      {
        id: "6",
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
    id: "1",
    heading: "Jan, 2025",
    categoryList: [
      {
        id: "1",
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
    id: "1",
    heading: "Jan, 2025",
    categoryList: [
      {
        id: "1",
        title: "Death Note",
        description: "Psychological",
        category: "anime",
        tags: ["Anime slayer"],
      },
    ],
  },
];

export const releasesCategories = ["games", "movies", "anime"] as const;

export type ReleaseCategoryType = (typeof releasesCategories)[number];

export const releasesData: Record<
  ReleaseCategoryType,
  ReleaseCategoryContainerProps[]
> = {
  games: gamesReleasesData,
  movies: moviesReleasesData,
  anime: animeReleasesData,
};
