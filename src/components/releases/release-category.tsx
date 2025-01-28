import { Button } from "@/components/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/card";
import Divider from "@/components/divider";
import { P } from "@/components/typography";
import Link from "next/link";
import React from "react";

export interface ReleaseCategoryProps {
  id: string;
  title: string;
  description: string;
  category: string;
  tags?: string[];
  showDivider?: boolean;
}

export function ReleaseCategory({
  id,
  title,
  description,
  category,
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
              <React.Fragment key={tag}>
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
        <Link href={`/releases/${category}/${id}`} className="w-full sm:w-fit">
          <Button className="w-full">Visit</Button>
        </Link>
      </CardHeader>
      {showDivider && <Divider className="w-[calc(100%-1.5rem)]" />}
    </div>
  );
}
