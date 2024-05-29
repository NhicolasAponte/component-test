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
  const { helloState } = useHelloContext()
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Order Name</CardTitle>
        <CardDescription>Submit your order or save it as a draft</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={SubmitButtonTest}>
          <div className="grid w-full items-center gap-4">
            <div className="border p-4 rounded-md">
              <text>
                {helloState}
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

