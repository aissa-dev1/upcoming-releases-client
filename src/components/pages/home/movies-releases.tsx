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
        title: "The 500 days of summer",
        description: "Romantic",
        tags: ["Movies slayer"],
      },
    ],
  },
];

export default function MoviesReleases() {
  return releasesData.map((release) => (
    <ReleaseCategoryContainer key={random.strongId()} {...release} />
  ));
}
