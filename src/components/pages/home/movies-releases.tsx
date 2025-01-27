import { random } from "@/utils/random";
import { ReleaseCategoryContainer } from "./release-category-container";
import { moviesReleasesData } from "@/data/releases-data";

export default function MoviesReleases() {
  return moviesReleasesData.map((release) => (
    <ReleaseCategoryContainer key={random.strongId()} {...release} />
  ));
}
