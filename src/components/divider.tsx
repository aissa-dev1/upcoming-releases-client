import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface DividerProps extends Omit<ComponentProps<"div">, "children"> {}

export default function Divider({ className, ...rest }: DividerProps) {
  return (
    <div
      className={cn("w-full h-0.5 bg-gray-background mx-auto", className)}
      {...rest}
    />
  );
}
