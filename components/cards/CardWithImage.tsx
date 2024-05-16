'use client'

import { Plus } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import { useState } from "react";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface CardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  alt: string;
}

export default function CardWIthImage({  title, description, imageSrc, alt }: CardProps) {

  const [isSelected, setIsSelected] = useState(false);


  function onClick() {

  }

  return (
    <div>
      <Card onClick={onClick} className={cn("w-[380px] hover:bg-slate-100")}>
        <div>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <Image 
                  src={imageSrc}
                  width={400}
                  height={400}
                  alt={alt}
              />
            </div>
          </CardContent>
        </div>
        <CardFooter>
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Add to Order
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}