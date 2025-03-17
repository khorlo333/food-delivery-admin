"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AddCategory } from "./AddCategory";
import { useEffect, useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { EditCategory } from "./EditCategory";

export default function Category() {
  const [categories, setCategories] = useState<
    { categoryName: string; _id: string }[] | null
  >(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    categoryName: string;
    _id: string;
  }>({
    _id: "",
    categoryName: "",
  });
  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/categories");
    const jsonData = await data.json();
    setCategories(jsonData.categories);
    console.log({ jsonData });
  };

  const handleEditDialog = () => {
    setOpenDialog(!openDialog);
  };

  useEffect(() => {
    getCategories();
  }, []);
  const deleteCategory = async (categoryId: string) => {
    try {
      await fetch(`http://localhost:4000/categories/${categoryId}`, {
        method: "DELETE",
      });
      getCategories();
    } catch (error) {
      console.log("Error", error);
      alert("Error in deleteCategory");
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <Avatar className="self-end">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className=" bg-slate-100 flex flex-col gap-4 rounded-3xl p-4">
        <h2 className="text-3xl font-bold">Dishes category</h2>
        <div className=" flex gap-3 p-2  items-center flex-wrap">
          <h4 className="border-solid border-[1px] border-primary rounded-3xl text-nowrap px-3 flex justify-center items-center">
            All dishes
          </h4>
          {categories?.map((category, index) => (
            <ContextMenu key={index}>
              <ContextMenuTrigger>
                <div className="border-solid border-[1px] hover:border-blue-600 border-primary rounded-3xl text-nowrap px-3 flex justify-center items-center">
                  {category.categoryName}
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem
                  onClick={() => {
                    handleEditDialog();
                    setSelectedCategory(category);
                  }}
                >
                  Edit
                </ContextMenuItem>
                <ContextMenuItem
                  className="cursor-pointer "
                  onClick={() => deleteCategory(category._id)}
                >
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
          <EditCategory
            handleEditDialog={handleEditDialog}
            openDialog={openDialog}
            getCategories={getCategories}
            id={selectedCategory._id}
            name={selectedCategory.categoryName}
          />
          <AddCategory getCategories={getCategories} />
        </div>
      </div>
    </div>
  );
}
