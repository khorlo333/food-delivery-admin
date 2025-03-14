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

export function EditCategory({
  openDialog,
  handleEditDialog,
  getCategories,
  id,
  name,
}: {
  openDialog: boolean;
  handleEditDialog: () => void;
  getCategories: () => void;
  id: string;
  name: string;
}) {
  const [saveID, setSaveID] = useState<string>("");
  // const [categories, setCategories] = useState<
  //   { categoryName: string; _id: string }[] | null
  // >(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: name,
    },
  });

  // 2. Define a submit handler.
  const editCategory = async (categoryId: string, categoryName: string) => {
    try {
      await fetch(`http://localhost:4000/categories/${categoryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName: categoryName }),
      });
      getCategories();
    } catch (error) {
      console.log("Error", error);
      alert("Error in updateCategory");
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    editCategory(id, values.categoryName);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
    handleEditDialog();
  }
  return (
    <Dialog open={openDialog} onOpenChange={handleEditDialog}>
      <DialogTitle hidden></DialogTitle>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <h2 className="font-bold">Edit category</h2>
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
            <Button type="submit">Edit category</Button>
          </form>
        </Form>
        <DialogFooter>
          {/* <Button type="submit">Add category</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
