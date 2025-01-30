"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomCarousel from "./custom-corousel";
import TextInput from "./text-input";
import SubmitButton from "./submit-button";
import ImageInput from "./image-input";
import toast from "react-hot-toast";
export type RegisterInputProps = {
    productName: string;
    price: number;
    quantity: number;
    color: string;
    image:string
};
export default function RegisterV1() {
    const initialImage = "/imgPlaceholder.jpg";
    const [imageUrl, setImageUrl] = useState(initialImage);
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RegisterInputProps>();
      const router = useRouter();
  async function onSubmit(data: RegisterInputProps) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    data.image = imageUrl
    data.price = Number(data.price)
    data.quantity = Number(data.quantity)
    try {
      setIsLoading(true)
      const response = await fetch(`${baseUrl}/api/v1/products`,{
        method: 'POST',
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      reset()
      setIsLoading(false)
      router.refresh()
      if(response.ok){
        toast.success("created successfully")
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      toast.error("failed to create")
    }
  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an Product</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Product Name"
              register={register}
              name="productName"
              errors={errors}
              placeholder="eg vegetables"
            />
            <TextInput
              label="Product Price"
              register={register}
              name="price"
              type="text"
              errors={errors}
              placeholder="$. 50.00"
            />
            <TextInput
              label="Quantity"
              register={register}
              name="quantity"
              type="text"
              errors={errors}
              placeholder=""
            />
            <TextInput
              label="Color"
              register={register}
              name="color"
              type="text"
              errors={errors}
              placeholder="Eg. Blue"
            />
            <ImageInput
                title="Product Image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="imageUploader"
            />

            <SubmitButton
              title="Submit"
              loading={isLoading}
              loadingTitle="Creating Product please wait..."
            />
          </form>

        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}