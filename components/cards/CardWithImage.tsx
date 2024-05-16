import { BellRing, Check, Plus } from "lucide-react"

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
      <CardHeader>
        <CardTitle>Product Name</CardTitle>
        <CardDescription>Product Description really really long product description really really long product description really really long product description </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add to Order
        </Button>
      </CardFooter>
    </Card>
  )
}