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
        title: "Death Note",
        description: "Psychological",
        tags: ["Anime slayer"],
      },
    ],
  },
];

export default function AnimeReleases() {
  return releasesData.map((release) => (
    <ReleaseCategoryContainer key={random.strongId()} {...release} />
  ));
}
