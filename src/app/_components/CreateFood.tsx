"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { DishType } from "@/lib/utils";

const formSchema = z.object({
  foodName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z
    .string({
      message: "Price is required",
    })
    .min(1, "Please price is required"),
  ingredients: z.string().min(2, "Ingredients must contain at least 2 text"),
  category: z.string(),
  image: z.string().nonempty("Zuragaa oruulna uu !"),
});

export function AddFood({ title, id }: { title: string; id: string }) {
  const [foodImageFile, setFoodImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      price: "",
      ingredients: "",
      category: "",
      image: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    addFood(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
    setOpenDialog(false);
  }

  const addFood = async (dish: DishType) => {
    try {
      await fetch("http://localhost:4000/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodName: dish.foodName,
          price: dish.price,
          image: "imageUrl",
          ingredients: dish.ingredients,
          category: dish.category,
        }),
      });
    } catch (error) {
      console.log("Error", error);
      alert("Aldaa garlaa");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (!file) {
      return;
    }

    setFoodImageFile(file);

    const temImageUrl = URL.createObjectURL(file);
    setPreviewUrl(temImageUrl);
    form.setValue("image", "uploaded");
  };

  const deleteImage = () => {
    setPreviewUrl(null);
  };
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTitle hidden></DialogTitle>
      <DialogTrigger asChild>
        <button className=" w-10 h-10 rounded-full text-white bg-red-500 flex justify-center items-center">
          +
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>
                Add new Dish to <br />
                {title}
              </DialogTitle>
            </DialogHeader>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="foodName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Food name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type food name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Ingredients</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter ingredients" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add dish</Button>
          </form>
        </Form>
        <DialogFooter>
          {/* <Button type="submit">Add dish</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
