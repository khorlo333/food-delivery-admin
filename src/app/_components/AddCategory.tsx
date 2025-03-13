"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const formSchema = z.object({
  categoryName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function AddCategory({ getCategories }: { getCategories: () => void }) {
  const [categories, setCategories] = useState<
    { categoryName: string; _id: string }[] | null
  >(null);
  const [openDialog, setOpenDialog] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: "",
    },
  });

  // 2. Define a submit handler.

  const addCategories = async (category: string) => {
    await fetch("http://localhost:4000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: category }),
    });
    getCategories();
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    addCategories(values.categoryName);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
    setOpenDialog(false);
  }
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
            <h2 className="font-bold">Add new category</h2>
            <FormField
              control={form.control}
              name="categoryName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category name</FormLabel>
                  <FormControl>
                    <Input placeholder="Type category name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add category</Button>
          </form>
        </Form>
        <DialogFooter>
          {/* <Button type="submit">Add category</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
