import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { cn } from "@/utils/cn";
import { random } from "@/utils/random";

type Tab = {
  value: string;
  content: React.ReactNode;
};

interface TabListProps {
  tabs: Tab[];
  value?: string;
  onValueChange?(value: string): void;
}

export default function TabList({ value, onValueChange, tabs }: TabListProps) {
  return (
    <Tabs value={value} onValueChange={onValueChange} className="w-[400px]">
      <TabsList>
        <div className="flex items-center gap-md">
          {tabs.map((tab) => (
            <TabsTrigger
              className={cn("data-[state=active]:bg-gray-background")}
              key={random.numId()}
              value={tab.value}
            >
              {tab.content}
            </TabsTrigger>
          ))}
        </div>
      </TabsList>
    </Tabs>
  );
}
