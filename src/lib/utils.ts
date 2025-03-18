import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export type DishType = {
  category: string;
  foodName: string;
  ingredients: string;
  price: string;
};
