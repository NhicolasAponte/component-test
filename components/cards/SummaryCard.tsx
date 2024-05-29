'use client';
import { SubmitButtonTest } from "@/actions/generic-actions"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useHelloContext } from "../context/HelloContextProvider"

export default function SummaryCard() {
  const orderDescription = `5/16 Laminated Glass\nNote: Some extra instructions`
  const { summaryCard } = useHelloContext()
  const { orderName, orderSpec, glassQuantity } = summaryCard;
  const { glassType, glassShape, glassSize, glassThickness, glassColor } = orderSpec;
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{orderName}</CardTitle>
        <CardDescription>Submit your order or save it as a draft</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={SubmitButtonTest}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col border p-4 rounded-md">
              <text>
                Glass Type: {glassType}
              </text>
              <text>
                Shape: {glassShape}
              </text>
              <text>
                Size: {glassSize}
              </text>
              <text>
                Thickness: {glassThickness}
              </text>
              <text>
                Tint: {glassColor} 
              </text>
            </div>
            <Button>Submit Order</Button>
            <div className="flex justify-between">
              <Button variant='outline'>Cancel</Button>
              <Button type="reset">Save</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

