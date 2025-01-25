import { CardDescription, CardHeader, CardTitle } from "@/components/card";
import Divider from "@/components/divider";
import { P } from "@/components/typography";
import { random } from "@/utils/random";
import React from "react";

export interface ReleaseCategoryProps {
  title: string;
  description: string;
  tags?: string[];
  showDivider?: boolean;
}

export function ReleaseCategory({
  title,
  description,
  tags,
  showDivider = true,
}: ReleaseCategoryProps) {
  return (
    <div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {Array.isArray(tags) && (
          <div className="flex gap-1">
            {tags.map((tag, index) => (
              <React.Fragment key={random.strongId()}>
                <P size="sm" className="text-gray-foreground capitalize">
                  {tag}
                </P>
                <P size="sm" className="text-gray-foreground capitalize">
                  {index === tags.length - 1 ? "" : "-"}
                </P>
              </React.Fragment>
            ))}
          </div>
        )}
      </CardHeader>
      {showDivider && <Divider className="w-[calc(100%-1.5rem)]" />}
    </div>
  );
}
