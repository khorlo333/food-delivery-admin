import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UploadCloudinary from "./CloudinaryUpload";
const categories = [
  { type: "All dishes" },
  { type: "Appetizers" },
  { type: "Salads" },
  { type: "Pizzas" },
  { type: "Lunch favorites" },
  { type: "Main dishes" },
  { type: "Fish & Sea foods" },
  { type: "Brunch" },
  { type: "Side dish" },
  { type: "Desserts" },
  { type: "Beverages" },
];

export default function Category() {
  return (
    <div className="w-full flex flex-col gap-5">
      <Avatar className="self-end">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className=" bg-slate-100 flex flex-col gap-4 rounded-3xl p-4">
        <h2 className="text-3xl font-bold">Dishes category</h2>
        <div className=" flex gap-3 p-2 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border-solid border-[1px] border-primary rounded-3xl text-nowrap px-3"
            >
              {category.type}
            </div>
          ))}
        </div>
        {/* <div className="h-12 bg-slate-50">
          <UploadCloudinary />
        </div> */}
      </div>
    </div>
  );
}
