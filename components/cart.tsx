import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ShoppingCart() {
  return (
    <Card className="max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">MY BAG</CardTitle>
        <p className="text-sm text-gray-500">Items are reserved for 60 minutes</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">adidas Originals T-shirt with shattered logo in black</p>
              <p className="text-sm text-gray-500">Bk1 - black | M</p>
            </div>
            <p className="font-medium">£22.95</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">adidas Originals T-shirt with shattered logo in yellow</p>
              <p className="text-sm text-gray-500">Yel - yellow | M</p>
            </div>
            <p className="font-medium">£18.35</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-gray-600">SUB-TOTAL</p>
            <p className="font-medium">£41.30</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Delivery</p>
            <p className="text-green-600">Standard Delivery (Free)</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full bg-black text-white">CHECKOUT</Button>
        <p className="text-sm text-gray-500">WE ACCEPT:</p>
        <div className="flex space-x-2">
          {/* Add payment icons here */}
        </div>
        <Input placeholder="Gold discount code? Add it in the next step." className="w-full" />
      </CardFooter>
    </Card>
  );
}