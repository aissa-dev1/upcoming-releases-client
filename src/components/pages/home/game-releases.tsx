import { random } from "@/utils/random";
import {
  ReleaseCategoryContainer,
  ReleaseCategoryContainerProps,
} from "./release-category-container";

const releasesData: ReleaseCategoryContainerProps[] = [
  {
    heading: "Jan, 2025",
    categoryList: [
      {
        title: "Clash of Clans",
        description: "Strategy",
        tags: ["Play store", "App store"],
      },
      {
        title: "Clash Royale",
        description: "Strategy",
        tags: ["Play store", "App store"],
      },
    ],
  },
  {
    heading: "Feb, 2025",
    categoryList: [
      {
        title: "Clash of Clans",
        description: "Strategy",
        tags: ["Play store", "App store"],
      },
      {
        title: "Clash Royale",
        description: "Strategy",
        tags: ["Play store", "App store"],
      },
    ],
  },
  {
    heading: "Mar, 2025",
    categoryList: [
      {
        title: "Clash of Clans",
        description: "Strategy",
        tags: ["Play store", "App store"],
      },
      {
        title: "Clash Royale",
        description: "Strategy",
        tags: ["Play store", "App store"],
      },
    ],
  },
];

export default function GameReleases() {
  return releasesData.map((release) => (
    <ReleaseCategoryContainer key={random.strongId()} {...release} />
  ));
}
