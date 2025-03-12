"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UploadCloudinary from "./CloudinaryUpload";
import { AddCategory } from "./AddCategory";
import { useEffect, useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState<
    { categoryName: string; _id: string }[] | null
  >(null);
  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/category");
    const jsonData = await data.json();
    setCategories(jsonData.categories);
    console.log({ jsonData });
  };

  useEffect(() => {
    getCategories();
  }, []);
  console.log("irj bnu", categories);
  return (
    <div className="w-full flex flex-col gap-5">
      <Avatar className="self-end">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className=" bg-slate-100 flex flex-col gap-4 rounded-3xl p-4">
        <h2 className="text-3xl font-bold">Dishes category</h2>
        <div className=" flex gap-3 p-2 ">
          {categories?.map((category, index) => (
            <div
              key={index}
              className="border-solid border-[1px] border-primary rounded-3xl text-nowrap px-3"
            >
              {category.categoryName}
            </div>
          ))}
          <AddCategory />
        </div>
      </div>
    </div>
  );
}
