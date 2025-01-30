import { RegisterInputProps } from "@/components/form"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const API = `${baseUrl}/api/v1/products`
export async function fetchedProducts() {

    const res  = await fetch(API)
    const products = await res.json()
    console.log(products)
    return products.data as RegisterInputProps[]
}