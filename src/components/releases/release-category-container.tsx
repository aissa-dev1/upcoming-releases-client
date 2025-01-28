import { H3 } from "@/components/typography";
import { ReleaseCategory, ReleaseCategoryProps } from "./release-category";
import { Card } from "@/components/card";

export interface ReleaseCategoryContainerProps {
  id: string;
  heading: string;
  categoryList?: ReleaseCategoryProps[];
}

export function ReleaseCategoryContainer({
  heading,
  categoryList,
}: ReleaseCategoryContainerProps) {
  return (
    <div className="flex flex-col gap-sm">
      <H3>{heading}</H3>
      {Array.isArray(categoryList) && (
        <Card>
          {categoryList.map((category) => (
            <ReleaseCategory
              key={category.id}
              {...category}
              showDivider={
                category.showDivider ||
                categoryList.indexOf(category) !== categoryList.length - 1
              }
            />
          ))}
        </Card>
      )}
    </div>
  );
}
