import { random } from "@/utils/random";
import { ReleaseCategoryContainer } from "./release-category-container";
import { animeReleasesData } from "@/data/releases-data";

export default function AnimeReleases() {
  return animeReleasesData.map((release) => (
    <ReleaseCategoryContainer key={random.strongId()} {...release} />
  ));
}
