import { random } from "@/utils/random";
import { ReleaseCategoryContainer } from "./release-category-container";
import { gamesReleasesData } from "@/data/releases-data";

export default function GamesReleases() {
  return gamesReleasesData.map((release) => (
    <ReleaseCategoryContainer key={random.strongId()} {...release} />
  ));
}
