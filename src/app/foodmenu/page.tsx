"use client";
import Category from "../_components/Category";
import Dishes from "../_components/Dishes";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState<
    { categoryName: string; _id: string }[] | null
  >(null);
  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/categories");
    const jsonData = await data.json();
    setCategories(jsonData.categories);
    console.log({ jsonData });
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Category />
      {categories?.map((category) => {
        return <Dishes id={category._id} title={category.categoryName} />;
      })}
    </div>
  );
}
