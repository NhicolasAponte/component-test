import { Plus } from "lucide-react"
import Image from "next/image"
import glassImage from '@/public/images/glass-verre.jpg';

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

type CardProps = React.ComponentProps<typeof Card>

export default function CardWIthImage({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <div>
        <CardHeader>
          <CardTitle>Product Name</CardTitle>
          <CardDescription>Product Description really really long product description really really long product description really really long product description </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
        <div>
          <Image 
              src={glassImage}
              width={400}
              height={400}
              alt='test image'
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
  )
}