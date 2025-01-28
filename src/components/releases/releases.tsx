import {
  ReleaseCategoryContainer,
  ReleaseCategoryContainerProps,
} from "./release-category-container";

interface ReleasesProps {
  list: ReleaseCategoryContainerProps[];
}

export default function Releases({ list }: ReleasesProps) {
  return list.map((release) => (
    <ReleaseCategoryContainer key={release.id} {...release} />
  ));
}
