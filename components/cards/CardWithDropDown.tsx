import { SubmitButtonTest } from "@/actions/generic-actions"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CardWithDropDown() {

  const rangeInInches = ["1", "2","3", "4","5", "6","7", "8",];
  const fractions = ['1/8', '5/32', '3/16', '1/4', '5/16', '3/8', '1/2', '5/8'];

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Dimensions</CardTitle>
        <CardDescription>All dimensions are in inches</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={SubmitButtonTest}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="width">Width (inches)</Label>
              
                <div className="flex space-x-4">
                  <Select>
                  <SelectTrigger id="width">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {rangeInInches.map((value, i) => (
                      <div key={i}>
                        <SelectItem value={value}>{value}</SelectItem>
                      </div>
                    ))}
                  </SelectContent>
                  </Select>
                  <Select>
                  <SelectTrigger id="width">
                  <SelectValue placeholder="1/8" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {fractions.map((value, i) => (
                      <div key={i}>
                        <SelectItem value={value}>{value}</SelectItem>
                      </div>
                    ))}
                  </SelectContent>
                  </Select>
                </div>
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="width">Height (inches)</Label>
              
                <div className="flex space-x-4">
                  <Select>
                  <SelectTrigger id="width">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {rangeInInches.map((value, i) => (
                      <div key={i}>
                        <SelectItem value={value}>{value}</SelectItem>
                      </div>
                    ))}
                  </SelectContent>
                  </Select>
                  <Select>
                  <SelectTrigger id="width">
                  <SelectValue placeholder="1/8" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {fractions.map((value, i) => (
                      <div key={i}>
                        <SelectItem value={value}>{value}</SelectItem>
                      </div>
                    ))}
                  </SelectContent>
                  </Select>
                </div>
              
            </div>
            <div className="flex justify-between">
              <Button>Back</Button>
              <Button type="submit">Continue</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

