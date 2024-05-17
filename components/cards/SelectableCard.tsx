"use client";

import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  alt: string;
  isSelected: boolean;
  onClick: (title: string) => void;
}

export default function SelectableCard({
  title,
  description,
  imageSrc,
  alt,
  isSelected,
  onClick,
}: CardProps) {
  return (
    <div>
      <Card
        onClick={() => onClick(title)}
        className={cn("w-[380px] cursor-pointer", {
          "bg-blue-100": isSelected,
          "hover:bg-slate-100": !isSelected,
        })}
      >
        <div>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <Image src={imageSrc} width={400} height={400} alt={alt} />
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
